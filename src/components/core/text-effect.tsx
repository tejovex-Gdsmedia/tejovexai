"use client";
import { motion } from "framer-motion";
import React from "react";

export const TextEffect = ({
  children,
  className,
  delay = 0,
  preset = "none"
}: {
  children: string,
  className?: string,
  delay?: number,
  preset?: "none" | "blur"
}) => {
  const letters = Array.from(children);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: preset === "blur" ? 0 : 20,
      filter: preset === "blur" ? "blur(10px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
