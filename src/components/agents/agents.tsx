"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/atoms';

const STAGES = ['OBSERVE', 'UNDERSTAND', 'DECIDE', 'ACT'];
const AGENTS = ['SALES', 'MARKETING', 'SUPPORT', 'OPERATIONS', 'KNOWLEDGE'];

const AgentCard = ({ agent }: { agent: string }) => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 1500 + Math.random() * 1000); // Randomized timing per agent
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 border border-surface rounded-2xl bg-surface/50 overflow-hidden relative">
      <h3 className="text-2xl font-bold mb-6 italic">{agent}</h3>
      <div className="space-y-4">
        {STAGES.map((stage, idx) => (
          <div key={stage} className="text-xs font-mono tracking-widest relative">
            <span className={`${activeStage === idx ? 'text-accent' : 'text-text-muted'}`}>
              {stage}
            </span>
            <div className="h-0.5 bg-surface mt-1 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{
                    width: activeStage === idx ? "100%" : "0%",
                    opacity: activeStage === idx ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AgentsSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto rounded-3xl">
    <SectionHeading className="mb-16 px-8">AI AGENTS THAT ACT.</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
      {AGENTS.map((agent) => (
        <AgentCard key={agent} agent={agent} />
      ))}
    </div>
  </section>
);
