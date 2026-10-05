"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeroTextContainer, HeroTextLine } from "@/components/hero/hero-text-effect";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        <HeroTextContainer>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            <HeroTextLine className="flex justify-center">BUILDING THE FUTURE</HeroTextLine>
            <HeroTextLine className="flex justify-center text-accent">OF BUSINESS WITH AI</HeroTextLine>
          </h1>
        </HeroTextContainer>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-text-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We combine artificial intelligence, automation, and business strategy to create scalable solutions that improve efficiency, enhance customer experiences, and accelerate growth.
        </motion.p>
      </div>
    </section>
  );
};
