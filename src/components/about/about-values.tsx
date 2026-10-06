"use client";

import { motion } from 'framer-motion';
import { WordReveal } from '../shared/WordReveal';

const values = [
  { title: 'Business-First Thinking', desc: 'Every automation starts with one question — does this make your business more money or save you time?' },
  { title: 'Practical Innovation', desc: 'We use proven tools, not experimental tech. Battle-tested systems that work in real Indian businesses.' },
  { title: 'Transparency & Trust', desc: 'No black boxes. You see exactly what we build and what results to expect — before and after.' },
  { title: 'Continuous Improvement', desc: 'Your automation is never done. We monitor, optimise, and upgrade as your business grows.' },
];

export default function AboutValues() {
  return (
    <section className="py-20 bg-surface text-text">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-sm uppercase tracking-widest mb-4"
        >
          • Our Foundation
        </motion.div>

        <WordReveal
            text="The Principles Behind Every AI Solution We Build"
            className="text-4xl font-bold mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-bg p-8 rounded-xl border border-text/10"
              style={{ perspective: '1000px' }}
              whileHover={{
                y: -10,
                rotateX: 5,
                borderColor: 'var(--color-accent)',
                scale: 1.02
              }}
            >
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-text-muted">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
