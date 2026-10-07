"use client";

import { motion } from 'framer-motion';

export default function TrustCards() {
  const cards = [
    {
      icon: "⚡",
      title: "Fast Implementation",
      description: "From audit to live automation in 1 to 7 days. Guaranteed.",
    },
    {
      icon: "🇮🇳",
      title: "India-First Approach",
      description: "WhatsApp-first. Hindi support. Mumbai-based team. We get your market.",
    },
    {
      icon: "📊",
      title: "Measurable ROI",
      description: "Every automation we build comes with clear metrics so you see the results.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-bg/80">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-text text-center mb-16"
        >
          Why 100+ Indian Businesses Trust Tejovex
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ rotateX: 60, opacity: 0, y: 20 }}
              whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.2,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                borderColor: "rgba(0,181,252,0.3)",
              }}
              className="p-8 rounded-xl border border-text/10 bg-surface hover:bg-surface/80 transition-all"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
