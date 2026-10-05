"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/animated-section';

const techStack = [
  "LLMs", "Vector Search", "Orchestration", "Observability", "Automation", "Data"
];

export const AboutStack = () => {
  return (
    <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">We work with powerful AI tools</h2>
      <p className="max-w-2xl mx-auto text-text-muted mb-16">
        We design, build, and evaluate with a modern AI stack—LLMs, vector search, orchestration, and observability—so your features are fast, reliable, and secure.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {techStack.map((tool, index) => (
          <motion.div
            key={index}
            className="p-8 border border-surface rounded-2xl bg-surface/5"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold text-accent">{tool}</span>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};
