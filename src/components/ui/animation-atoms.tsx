"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

// Counter for statistics
export const CounterStat = ({ value, label }: { value: number, label: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 0"] });
  // Simplified counter simulation
  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-5xl font-bold text-accent">
        {value}+
      </motion.div>
      <div className="text-sm uppercase tracking-widest text-text-muted mt-2">{label}</div>
    </div>
  );
};

// Animated path for Integrations
export const IntegrationsConnector = () => {
    return (
        <div className="relative h-24 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 20">
                <motion.path
                    d="M 0 10 Q 50 0 100 10"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>
        </div>
    )
}
