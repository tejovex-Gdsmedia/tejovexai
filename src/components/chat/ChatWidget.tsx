"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, RefreshCw, SendHorizonal, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  showLeadForm?: boolean;
};

const OPENING_MESSAGE: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hey! 👋 I'm Tejo, your AI guide at Tejovex AI. I help Indian business owners discover how AI can automate the boring stuff in their business.\n\nWhat kind of business do you run?",
    timestamp: new Date(),
  },
];

const WIDGET_OPEN_KEY = "tejo_widget_open";
const MESSAGES_KEY = "tejo_messages";
const HAS_OPENED_KEY = "tejo_chat_opened";

function loadStoredMessages(): Message[] {
  if (typeof window === "undefined") return OPENING_MESSAGE;
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    if (!raw) return OPENING_MESSAGE;
    const parsed = JSON.parse(raw) as Message[];
    if (!Array.isArray(parsed) || parsed.length === 0) return OPENING_MESSAGE;
    return parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp) }));
  } catch {
    return OPENING_MESSAGE;
  }
}

function loadStoredOpen(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(WIDGET_OPEN_KEY);
    return raw ? JSON.parse(raw) === true : false;
  } catch {
    return false;
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState<boolean>(loadStoredOpen);
  const [messages, setMessages] = React.useState<Message[]>(loadStoredMessages);
  const [isTyping, setIsTyping] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [leadCaptured, setLeadCaptured] = React.useState(false);
  const [leadName, setLeadName] = React.useState("");
  const [leadWhatsapp, setLeadWhatsapp] = React.useState("");
  const [leadSubmitted, setLeadSubmitted] = React.useState(false);
  const [hasNewMessage, setHasNewMessage] = React.useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Auto-open once, 10s after first visit, unless the user has already
  // interacted with the widget before.
  React.useEffect(() => {
    const hasOpened = localStorage.getItem(HAS_OPENED_KEY);
    if (hasOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem(HAS_OPENED_KEY, "true");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Persist open/closed state.
  React.useEffect(() => {
    localStorage.setItem(WIDGET_OPEN_KEY, JSON.stringify(isOpen));
  }, [isOpen]);

  // Persist message history.
  React.useEffect(() => {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to the latest message.
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const autoResizeTextarea = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const maxHeight = 72; // roughly 3 rows
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
  };

  const handleSendMessage = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue("");
    setIsTyping(true);
    requestAnimationFrame(autoResizeTextarea);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("AI unavailable");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      const assistantId = crypto.randomUUID();

      // Seed a live-updating assistant message so the reply streams in.
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "", timestamp: new Date() },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantContent += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: assistantContent } : m
          )
        );
      }

      const shouldShowLeadForm =
        !leadCaptured && assistantContent.includes("[SHOW_LEAD_FORM]");
      const cleanedContent = assistantContent.replace("[SHOW_LEAD_FORM]", "").trim();

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, content: cleanedContent, showLeadForm: shouldShowLeadForm }
            : m
        )
      );

      if (shouldShowLeadForm) setLeadCaptured(true);
      if (!isOpen) setHasNewMessage(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Our team can answer that better — want me to connect you?",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadWhatsapp.trim()) return;

    const conversation = messages
      .slice(-8)
      .map((m) => `${m.role === "user" ? "User" : "Tejo"}: ${m.content}`)
      .join("\n");

    try {
      const res = await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: leadName, whatsapp: leadWhatsapp, conversation }),
      });
      const data = await res.json();

      if (data.success) {
        setLeadSubmitted(true);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: `Perfect! 🎉 Our team will WhatsApp you on +91${leadWhatsapp} within 2 hours. Meanwhile, feel free to explore our AI systems!`,
            timestamp: new Date(),
          },
        ]);
      }
    } catch {
      // Swallow — the lead API route already guards server-side; nothing
      // more to do client-side than silently fail the optimistic UI.
    }
  };

  const handleRefresh = () => {
    setMessages(OPENING_MESSAGE);
    setLeadCaptured(false);
    setLeadSubmitted(false);
    setLeadName("");
    setLeadWhatsapp("");
    localStorage.removeItem(MESSAGES_KEY);
  };

  return (
    <>
      {/* Launcher button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setHasNewMessage(false);
          }}
          aria-label="Open chat with Tejo"
          className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 shadow-2xl transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-violet-400 opacity-75 animate-ping" />
          <Bot size={26} className="relative text-white" />
          {hasNewMessage && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              1
            </span>
          )}
        </button>
      )}

      {/* Widget panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-2xl shadow-violet-900/20 md:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-violet-600 to-purple-700 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/20">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center text-sm font-bold text-white">
                    Tejo
                    <span className="ml-1 h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs text-white/70">Tejovex AI • Online</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleRefresh}
                  aria-label="Restart conversation"
                  className="rounded-lg p-1.5 text-white/80 transition-colors hover:text-white"
                >
                  <RefreshCw size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="rounded-lg p-1.5 text-white/80 transition-colors hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message.role === "assistant" ? (
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700">
                        <Bot size={12} className="text-white" />
                      </div>
                      <div>
                        <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3 text-sm text-gray-800">
                          {message.content || "…"}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>

                        {message.showLeadForm && !leadSubmitted && (
                          <form
                            onSubmit={handleLeadSubmit}
                            className="mt-2 rounded-xl border border-violet-100 bg-gray-50 p-4"
                          >
                            <p className="mb-3 text-sm font-semibold text-gray-700">
                              Share your details 👇
                            </p>
                            <input
                              type="text"
                              value={leadName}
                              onChange={(e) => setLeadName(e.target.value)}
                              placeholder="Your name"
                              required
                              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
                            />
                            <div className="mt-2 flex items-center rounded-lg border border-gray-200">
                              <span className="px-3 text-sm text-gray-500">+91</span>
                              <input
                                type="tel"
                                value={leadWhatsapp}
                                onChange={(e) => setLeadWhatsapp(e.target.value)}
                                placeholder="WhatsApp number"
                                required
                                className="w-full rounded-r-lg py-2 pr-3 text-sm outline-none"
                              />
                            </div>
                            <button
                              type="submit"
                              className="mt-3 w-full rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 py-2 text-sm font-medium text-white"
                            >
                              Get Free AI Audit →
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-none bg-gradient-to-br from-violet-600 to-purple-700 px-4 py-3 text-sm text-white">
                        {message.content}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 border-t border-gray-100 bg-white p-3">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  autoResizeTextarea();
                }}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask me anything..."
                disabled={isTyping}
                className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-violet-400 disabled:opacity-60"
              />
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                aria-label="Send message"
                className={cn(
                  "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-white transition-colors hover:bg-violet-700",
                  (isTyping || !inputValue.trim()) && "opacity-50"
                )}
              >
                <SendHorizonal size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
