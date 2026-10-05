"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { id: '01', title: 'DISCOVER', duration: '1-3 DAYS' },
  { id: '02', title: 'BUILD', duration: '1 WEEK' },
  { id: '03', title: 'LAUNCH', duration: '1-2 WEEKS' },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24 px-8 max-w-7xl mx-auto relative">
      <h2 className="text-5xl font-bold mb-16">PROCESS</h2>

      <div className="relative">
          {/* Animated Track */}
          <div className="absolute left-0 top-0 w-1 h-full bg-surface">
              <motion.div
                className="w-full bg-accent"
                style={{ height: progressHeight }}
              />
          </div>

        <div className="flex flex-col gap-16 pl-8">
          {steps.map((step, i) => (
            <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
            >
              <span className="text-accent font-mono">STEP {step.id}</span>
              <h3 className="text-4xl font-bold my-4">{step.title}</h3>
              <p className="font-mono text-sm text-text-muted">{step.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
