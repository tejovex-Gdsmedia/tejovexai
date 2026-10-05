"use client";

import { motion } from 'framer-motion';
import React from 'react';

export const SectionHeading = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter ${className}`}>
    {children}
  </h2>
);

export const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 bg-accent text-bg font-bold rounded-full ${className}`}
    >
      {children}
    </motion.button>
  );
};
