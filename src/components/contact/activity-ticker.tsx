"use client";

import { motion } from 'framer-motion';

export default function ActivityTicker() {
  const activities = [
    "⚡ Lead captured via WhatsApp",
    "✅ Invoice automation deployed",
    "🤖 AI agent went live",
    "📊 Report auto-generated",
    "💬 Customer query resolved in 2s",
    "🎯 Sales follow-up sent automatically",
  ];

  return (
    <section className="py-8 px-8 bg-bg border-y border-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              animation: marquee 25s linear infinite;
              display: flex;
              gap: 3rem;
              white-space: nowrap;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee">
            {[...activities, ...activities].map((activity, i) => (
              <div
                key={i}
                className="text-accent/80 text-sm font-medium flex-shrink-0"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
