"use client";

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const CountUpNumber = ({ value }) => {
  const spring = useSpring(0, { stiffness: 100, damping: 15 });
  const display = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};
