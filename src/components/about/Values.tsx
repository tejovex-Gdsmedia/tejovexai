"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { WordReveal } from '../shared/WordReveal';

const values = [
  { title: "Business-First Thinking", desc: "Every automation starts with one question — does this make your business more money or save you time?" },
  { title: "Practical Innovation", desc: "We use proven tools, not experimental tech. Battle-tested systems that work in real Indian businesses." },
  { title: "Transparency & Trust", desc: "No black boxes. You see exactly what we build and what results to expect — before and after." },
  { title: "Continuous Improvement", desc: "Your automation is never done. We monitor, optimise, and upgrade as your business grows." }
];

export const Values = () => {
  return (
    <section className="py-24 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <WordReveal text="The Principles Behind Every AI Solution We Build" className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center" />

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 bg-[#1a1a1a] rounded-2xl border border-[#f0c8a0]/20 hover:border-[#f0c8a0]/50 transition-all cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
