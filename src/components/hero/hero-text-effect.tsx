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

export const HeroTextLine = ({ children, className, split = false, wordSplit = false }: { children: React.ReactNode, className?: string, split?: boolean, wordSplit?: boolean }) => {
  if (split) {
    const text = typeof children === 'string' ? children : '';
    return (
      <motion.div
        className={`flex justify-center tracking-widest ${className}`}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
        }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10, rotate: i % 2 === 0 ? 20 : -20 },
              visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5 } }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (wordSplit) {
    const text = typeof children === 'string' ? children : '';
    return (
      <motion.div
        className={`flex flex-wrap justify-center gap-x-2 ${className}`}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
        }}
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
          }
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
};
