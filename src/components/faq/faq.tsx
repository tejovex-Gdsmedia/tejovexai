"use client";

import { motion } from 'framer-motion';

const faqs = [
  {
    q: "How long does it take to set up an automation?",
    a: "Typically 1 to 7 days from audit to live launch. Simple single-flow automations can go live in 1 to 7 days.",
  },
  {
    q: "Do I need a tech team or developer to use this?",
    a: "No. We handle everything — build, test, launch, and support. You just approve the workflow and watch it work.",
  },
  {
    q: "What tools do you use?",
    a: "n8n, WhatsApp Business API, AutomateChats, Google Sheets, Notion, CRMs (Zoho, HubSpot), and custom AI agents.",
  },
  {
    q: "Will this work for my industry?",
    a: "Yes. We've built automations for clinics, CA firms, retail shops, aesthetics businesses, logistics companies, and more.",
  },
  {
    q: "What if the automation breaks or stops working?",
    a: "All packages include monitoring and support. If something breaks, we fix it — usually within 24 hours.",
  },
  {
    q: "Can I start with just one automation?",
    a: "Absolutely. The Starter plan is built for that. Most clients expand after seeing results from their first automation.",
  },
  {
    q: "What ROI can I expect?",
    a: "Clients typically save 20–40 hours/month in manual work and see 2–3× improvement in lead response time within 30 days.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-8 bg-bg/80 text-text">
      {/* Label */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full font-badge font-normal text-4xl uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • FAQ
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-16">
        Everything You Want to Know
        <br />
        <span className="text-accent">Before We Start</span>
      </h2>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-accent/20 bg-accent/5"
          >
            <h3 className="text-lg font-bold mb-4 text-text">{faq.q}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
