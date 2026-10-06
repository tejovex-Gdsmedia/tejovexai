"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const WordReveal = ({ text, className, stagger = 0.08, initialY = "110%", animateY = "0%" }: {
  text: string,
  className?: string,
  stagger?: number,
  initialY?: string,
  animateY?: string
}) => {
  const words = text.split(" ");

  const containerVariants = {
    visible: { transition: { staggerChildren: stagger } }
  };

  const wordVariants = {
    hidden: { y: initialY, opacity: 0 },
    visible: {
      y: animateY,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-3 last:mr-0 inline-block">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};
