"use client";

import dynamic from "next/dynamic";

// next/dynamic's `ssr: false` option can only be used inside a Client
// Component — the root layout is a Server Component, so this tiny wrapper
// exists purely to hold that call. ChatWidget reads localStorage, so it
// must never be rendered on the server.
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatWidgetLoader() {
  return <ChatWidget />;
}
