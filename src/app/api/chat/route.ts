import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chatSystemPrompt";

export const runtime = "nodejs";

type ChatMessage = {
  role: string;
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        temperature: 0.7,
        max_tokens: 350,
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!openaiRes.ok || !openaiRes.body) {
      throw new Error(`OpenAI request failed with status ${openaiRes.status}`);
    }

    // Parse OpenAI's SSE stream server-side and re-emit just the plain text
    // token deltas, so the client can accumulate raw text chunk by chunk
    // without needing to understand OpenAI's SSE/JSON framing itself.
    const stream = new ReadableStream({
      async start(controller) {
        const reader = openaiRes.body!.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith("data:")) continue;

              const data = trimmed.slice(5).trim();
              if (data === "[DONE]") continue;

              try {
                const json = JSON.parse(data);
                const token = json.choices?.[0]?.delta?.content;
                if (token) controller.enqueue(encoder.encode(token));
              } catch {
                // Ignore partial/malformed SSE chunk fragments; the next
                // read will complete them via the buffer above.
              }
            }
          }
        } catch (err) {
          controller.error(err);
          return;
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "AI unavailable" }, { status: 500 });
  }
}
