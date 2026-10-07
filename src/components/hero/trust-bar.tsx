"use client";

import React from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { ClientMarquee } from '../shared/ClientMarquee';

const stats = [
  { value: 120, label: "Projects Delivered", suffix: "+" },
  { value: 24, label: "AI Agents Running", suffix: "/7" },
  { value: 8, label: "Idea to Production", suffix: "–10 Wks" },
  { value: 100, label: "Indian MSME Focus", suffix: "%" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (latest) => Math.floor(latest));

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

export const TrustBar = () => {
  return (
    <section className="bg-bg/60 py-16 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-text-muted mb-4">
            Trusted by 100+ clients across various industries — shipping AI from idea to production in 8–10 weeks
          </p>
          <div className="text-accent font-mono text-sm">
            ⭐⭐⭐⭐⭐ Trustpilot | 4.9 / 5
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-3xl font-bold text-accent mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Marquee - Replaces Static Text List */}
        <div className="mb-12">
          <ClientMarquee />
        </div>

        <div className="text-center border-t border-accent/10 pt-8">
          <p className="text-lg italic text-text">
            "The Future Belongs to Automated Businesses"
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mt-2">— Tejovex Agentic AI</p>
        </div>
      </div>
    </section>
  );
};
