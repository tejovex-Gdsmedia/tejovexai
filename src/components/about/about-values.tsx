"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/animated-section';

const values = [
  {
    title: "Business-First Thinking",
    description: "Every solution starts with understanding your business goals. We focus on solving real operational challenges and delivering measurable outcomes, not just implementing technology for the sake of it."
  },
  {
    title: "Practical Innovation",
    description: "We leverage the latest AI technologies to create practical solutions that improve efficiency, streamline workflows, and generate tangible business results."
  },
  {
    title: "Transparency & Trust",
    description: "From planning to deployment, we maintain clear communication, realistic expectations, and complete transparency throughout every project."
  },
  {
    title: "Continuous Improvement",
    description: "AI is constantly evolving, and so are we. We continuously optimize, monitor, and refine solutions to ensure long-term performance and scalability."
  }
];

export const AboutValues = () => {
  return (
    <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">THE VALUES BEHIND EVERY AI SOLUTION</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="p-8 border border-surface rounded-2xl bg-surface/10 hover:bg-surface/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p className="text-text-muted">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};
