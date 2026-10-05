"use client";
import { motion } from "framer-motion";
import React from "react";

export const HeroTextContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {children}
    </motion.div>
  );
};

export const HeroTextLine = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: "100%" },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }
        }}
        className="relative"
      >
        {children}

        {/* Subtle AI-style glow/light sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ delay: 1, duration: 1.5, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};
