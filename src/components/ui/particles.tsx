"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Particles = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
          initial={{ x: `${p.x}vw`, y: `${p.y}vh` }}
          animate={{
            x: [`${p.x}vw`, `${p.x + (Math.random() - 0.5) * 10}vw`],
            y: [`${p.y}vh`, `${p.y + (Math.random() - 0.5) * 10}vh`],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};
