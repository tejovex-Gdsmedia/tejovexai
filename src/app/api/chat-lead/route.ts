import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  whatsapp: string;
  conversation: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, whatsapp, conversation } = (await req.json()) as LeadPayload;

    await fetch(process.env.LEAD_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        whatsapp,
        conversation_summary: conversation,
        source: "tejovexai.in AI Chatbot",
        timestamp: new Date().toISOString(),
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chat lead webhook error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
