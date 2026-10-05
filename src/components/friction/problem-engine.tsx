"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SYSTEMS = ['CRM', 'WhatsApp', 'Email', 'ERP', 'Calendar'];

export const ProblemEngine = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.8, 1, 1]);

  return (
    <section ref={ref} className="py-32 px-8 text-center bg-surface/10 overflow-hidden">
      <motion.div style={{ opacity, scale }}>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">
          "Most businesses don't need <br />
          <span className="text-text-muted">more software.</span>"
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          {SYSTEMS.map((system, i) => (
            <motion.div
                key={system}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 border border-surface rounded-lg bg-bg font-mono"
            >
                {system}
            </motion.div>
          ))}
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
          "They need their software <br />
          <span className="text-accent">to work together.</span>"
        </h2>
      </motion.div>
    </section>
  );
};
