"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NODES = ['Sales', 'Marketing', 'Ops', 'Support', 'Knowledge', 'HR'];

export const IntelligenceGrid = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering the SVG-based animation until mounted on client to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-5xl font-bold mb-20 text-center">ONE INTELLIGENT LAYER.</h2>
        <div className="relative h-[600px] flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-lg z-10">
                TEJOVEX AI
            </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-5xl font-bold mb-20 text-center">ONE INTELLIGENT LAYER.</h2>
      <div className="relative h-[600px] flex items-center justify-center">

        {/* Animated Connections */}
        <svg className="absolute inset-0 w-full h-full -z-0">
          {NODES.map((_, i) => (
            <motion.line
              key={i}
              x1="50%" y1="50%"
              x2={`${50 + Math.cos(i * 60 * Math.PI / 180) * 20}%`}
              y2={`${50 + Math.sin(i * 60 * Math.PI / 180) * 20}%`}
              stroke="var(--accent)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* Center Node */}
        <motion.div
            animate={{ scale: [1, 1.05, 1]}}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-40 h-40 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-lg absolute z-10"
        >
            TEJOVEX AI
        </motion.div>

        {/* Peripheral Nodes */}
        {NODES.map((item, i) => (
          <motion.div
            key={item}
            className="absolute p-4 border border-surface bg-bg rounded-lg text-sm font-mono"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
                x: Math.cos(i * 60 * Math.PI / 180) * 200,
                y: Math.sin(i * 60 * Math.PI / 180) * 200
            }}
            transition={{ delay: 1 + i * 0.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
