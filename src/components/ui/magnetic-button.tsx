"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: dx, y: dy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      whileHover={{
        scale: 1.08,
        boxShadow: [
          "0 0 0px 0px rgba(0, 181, 252, 0.4)",
          "0 0 20px 10px rgba(0, 181, 252, 0.2)",
          "0 0 0px 0px rgba(0, 181, 252, 0.4)",
        ],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};
