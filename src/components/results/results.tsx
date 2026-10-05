"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const stats = [
  { value: 70, label: "LESS MANUAL WORK", suffix: "%" },
  { value: 3, label: "FASTER LEAD RESPONSE", suffix: "X" },
  { value: 24, label: "CUSTOMER AVAILABILITY", suffix: "/7" },
];

const AnimatedCounter = ({ from, to }: { from: number, to: number }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration: 2 });
        return () => controls.stop();
    }, [count, to]);

    return <motion.span>{rounded}</motion.span>;
};

export const ResultsSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
    {stats.map((stat, i) => (
      <div key={i} className="flex flex-col gap-4">
        <div className="text-6xl md:text-8xl font-bold text-accent">
            <AnimatedCounter from={0} to={stat.value} />{stat.suffix}
        </div>
        <span className="font-mono text-sm tracking-widest">{stat.label}</span>
      </div>
    ))}
  </section>
);
