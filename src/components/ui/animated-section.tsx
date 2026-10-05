"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { variants } from '@/lib/motion';

export const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
};
