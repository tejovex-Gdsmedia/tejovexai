"use client";

import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <motion.svg
      className="w-full h-px mb-8"
      viewBox="0 0 100 1"
      preserveAspectRatio="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      <motion.path
        d="M0 0 H 100"
        stroke="#f0c8a0"
        strokeWidth="1"
        fill="transparent"
      />
    </motion.svg>
  );
};
