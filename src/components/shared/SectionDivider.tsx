"use client";
import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <div className="w-full py-12 flex justify-center">
      <motion.svg
        width="200"
        height="2"
        viewBox="0 0 200 2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.line
          x1="0"
          y1="1"
          x2="200"
          y2="1"
          stroke="#f0c8a0"
          strokeWidth="2"
        />
      </motion.svg>
    </div>
  );
};
