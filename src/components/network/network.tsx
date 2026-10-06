"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const NODES = [
  { name: 'Sales', angle: 0 },
  { name: 'Marketing', angle: 60 },
  { name: 'Support', angle: 120 },
  { name: 'Knowledge', angle: 180 },
  { name: 'HR', angle: 240 },
  { name: 'Operations', angle: 300 },
];

const Packet = () => (
  <motion.circle
    r="4"
    fill="var(--accent)"
    initial={{ offsetDistance: "0%" }}
    animate={{ offsetDistance: "100%" }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    style={{ offsetPath: "path('M 0 0 L 100 100')" }} // Simplified placeholder
  />
);

export const IntelligenceGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto overflow-hidden text-center">
      <h2 className="text-5xl font-bold mb-20">ONE INTELLIGENT LAYER.</h2>

      <div className="relative h-[500px] flex items-center justify-center">

        {/* Central Hub */}
        <motion.div
           className="w-32 h-32 rounded-full bg-accent text-bg flex items-center justify-center font-bold text-lg z-10 shadow-[0_0_30px_rgba(249,210,186,0.3)]"
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          TEJOVEX AI
        </motion.div>

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.div
            key={node.name}
            className="absolute p-4 border border-surface bg-bg rounded-xl text-sm font-mono z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
                opacity: 1,
                scale: 1,
                x: Math.cos((node.angle * Math.PI) / 180) * 200,
                y: Math.sin((node.angle * Math.PI) / 180) * 200
            } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: "var(--surface)" }}
          >
            {node.name}
          </motion.div>
        ))}

        {/* SVG Connections and Packets */}
        <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
            {NODES.map((node, i) => {
                const x2 = 50 + Math.cos((node.angle * Math.PI) / 180) * 30;
                const y2 = 50 + Math.sin((node.angle * Math.PI) / 180) * 35;
                const pathId = `path-${i}`;
                const pathData = `M 500 250 L ${x2 * 10} ${y2 * 5}`; // Approximate pixel path for packet

                return (
                  <g key={node.name}>
                    <motion.line
                        x1="50%" y1="50%"
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="var(--surface)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ delay: 1 + i * 0.1, duration: 1 }}
                    />

                    {/* Data Packets */}
                    {isInView && (
                      <motion.circle
                        r="3"
                        fill="var(--accent)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2, delay: 2 + i * 0.5, repeat: Infinity }}
                      >
                         <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path={pathData}
                         />
                      </motion.circle>
                    )}
                  </g>
                );
            })}
        </svg>
      </div>
    </section>
  );
};
