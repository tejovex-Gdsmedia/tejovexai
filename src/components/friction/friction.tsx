"use client";
import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const SYSTEMS = [
  { name: 'CRM', x: -100, y: -50 },
  { name: 'WhatsApp', x: 100, y: -50 },
  { name: 'Email', x: -150, y: 50 },
  { name: 'ERP', x: 0, y: 100 },
  { name: 'Calendar', x: 150, y: 50 },
];

export const FrictionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="py-32 px-8 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-5xl font-bold mb-20 text-center">SYSTEM FRICTION</h2>

      <div className="relative h-[500px] flex items-center justify-center">
        {/* Disconnected Systems */}
        {SYSTEMS.map((sys, i) => (
          <motion.div
            key={sys.name}
            className="absolute p-6 border border-surface bg-surface/10 rounded-2xl font-mono text-sm shadow-xl"
            initial={{ x: sys.x * 2, y: sys.y * 2, opacity: 0 }}
            animate={isInView ? { x: sys.x, y: sys.y, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, delay: i * 0.2 }}
          >
            {sys.name}
            {/* "Failing" particles */}
            <motion.div
               className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
               animate={{ opacity: [1, 0] }}
               transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
            />
          </motion.div>
        ))}

        {/* The Connection (Tejovex AI) */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 2, duration: 1 }}
            className="absolute w-24 h-24 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-xs z-30"
        >
            TEJOVEX AI
        </motion.div>

        {/* Animated Connecting Lines (Simulated with lines appearing) */}
        <svg className="absolute inset-0 w-full h-full -z-10">
            {SYSTEMS.map((sys, i) => (
                <motion.line
                    key={sys.name}
                    x1="50%" y1="50%"
                    x2={`${50 + (sys.x / 4)}%`}
                    y2={`${50 + (sys.y / 4)}%`}
                    stroke="var(--accent)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ delay: 2.5 + i * 0.2, duration: 1 }}
                />
            ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 4, duration: 1 }}
        className="text-center mt-12"
      >
        <p className="text-3xl font-bold">They need their software to work together.</p>
      </motion.div>
    </section>
  );
};
