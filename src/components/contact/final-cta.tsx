"use client";

import { motion } from 'framer-motion';

export const FinalCTASection = () => {
  return (
    <section id="contact" className="py-24 px-8 bg-bg/80 text-text">
      {/* Label */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full font-badge font-normal text-4xl uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • About / Let's Work
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
        Ready to Let AI Run
        <br />
        <span className="text-accent">Your Business?</span>
      </h2>

      {/* Subheadline */}
      <p className="text-center text-text-muted text-lg max-w-xl mx-auto mb-8 leading-relaxed">
        Join 100+ Indian businesses that already have AI agents working for them 24/7. Your first audit is free.
      </p>

      {/* Urgency */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 rounded-lg bg-red-500/10 text-red-500 font-mono text-sm border border-red-500/20">
          ⚠️ Only 3 client slots available this month
        </span>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a
          href="https://wa.me/91"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full bg-green-600 text-white font-bold text-sm hover:scale-105 transition-transform"
        >
          Chat on WhatsApp →
        </a>
        <a
          href="https://calendly.com/tejovex"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full border border-accent text-accent font-bold text-sm hover:bg-accent/10 transition-colors"
        >
          Book a Discovery Call
        </a>
      </div>

      {/* Trust Strip */}
      <div className="flex flex-wrap justify-center gap-8 text-sm font-mono uppercase tracking-widest text-text-muted border-t border-accent/10 pt-12">
        <span>📍 Based in Mumbai, India</span>
        <span>🌐 Available for Worldwide Projects</span>
        <span>✅ No Lock-in Contracts</span>
        <span>⚡ Results in 8–10 Weeks</span>
      </div>
    </section>
  );
};
