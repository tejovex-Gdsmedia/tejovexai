"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASES = ["INTELLIGENTLY", "AUTOMATICALLY", "24×7 AT LOWEST COST"];

export const Typewriter = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000); // Display each phrase for 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={phraseIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-bold tracking-tighter"
        style={{
          fontSize: "clamp(1.875rem, 10vw, 5rem)",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          textAlign: "center",
          overflowWrap: "break-word",
          wordBreak: "normal",
          lineHeight: "1.2",
        }}
      >
        {PHRASES[phraseIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

