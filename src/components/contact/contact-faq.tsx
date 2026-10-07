"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How quickly do you reply?",
      a: "Within 5 minutes on WhatsApp during business hours. Same day for email.",
    },
    {
      q: "What's your typical project timeline?",
      a: "Most AI implementations take 1 to 7 days from discovery to deployment. We move fast because we know time is money.",
    },
    {
      q: "Can you integrate with our existing tools?",
      a: "Yes. We work with your CRM, email, WhatsApp, Slack, and 100+ other platforms. No need to change your stack.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-bg/80">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text text-center mb-12"
        >
          Quick Questions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="p-6 rounded-xl border border-text/10 bg-surface cursor-pointer hover:border-accent/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-bold text-text leading-snug">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent flex-shrink-0"
                >
                  +
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-muted text-sm mt-4 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
