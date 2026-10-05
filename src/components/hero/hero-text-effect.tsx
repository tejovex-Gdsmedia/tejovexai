"use client";
import { motion } from "framer-motion";
import React from "react";

export const HeroTextContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      {children}
    </motion.div>
  );
};

export const HeroTextLine = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
