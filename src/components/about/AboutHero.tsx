"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { WordReveal } from '../shared/WordReveal';

export const AboutHero = () => {
  const router = useRouter();

  const handleStartProject = () => {
    router.push('/contact#contact-form');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0f0f0f] text-white pt-20">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-0 Left-0 w-[500px] h-[500px] bg-[#1a4a2e]/30 rounded-full blur-[120px]"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f0c8a0]/10 rounded-full blur-[120px]"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="px-4 py-1.5 mb-8 rounded-full bg-[#f0c8a0]/10 border border-[#f0c8a0]/20"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#f0c8a0]">• About Us</span>
        </motion.div>

        <WordReveal
          text="Building the Future of Business with AI"
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
        />

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          We don't just implement technology — we rethink how your business operates from the ground up. Tejovex partners with Indian MSMEs to replace manual chaos with intelligent, always-on AI systems.
        </motion.p>

        <motion.button
          onClick={handleStartProject}
          className="px-8 py-4 bg-[#f0c8a0] text-[#0f0f0f] font-bold rounded-full text-lg hover:scale-105 transition-all"
        >
          Start a Project →
        </motion.button>
      </div>
    </section>
  );
};
