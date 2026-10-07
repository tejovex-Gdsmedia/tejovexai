"use client";
import { ProblemScene } from "@/components/friction/problem-scene";
import { CapabilitiesSection } from "@/components/services/capabilities";
import { ResultsSection } from "@/components/results/results";
import { FAQSection } from "@/components/faq/faq";
import { FinalCTASection } from "@/components/contact/final-cta";
import { ProcessSection } from "@/components/process/process";
import { AnimatedSection } from "@/components/ui/animated-section";
import { HeroBackground } from "@/components/hero/hero-background";
import { HeroGrid } from "@/components/hero/hero-grid";
import { EntranceReveal } from "@/components/ui/entrance-reveal";
import { Typewriter } from "@/components/hero/typewriter";
import { TrustBar } from "@/components/hero/trust-bar";
import { Header4 } from "@/components/navigation/header-4";
import { HeroTextContainer, HeroTextLine } from "@/components/hero/hero-text-effect";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomeClient() {
  const router = useRouter();
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const handleStartProject = () => {
    router.push('/contact#contact-form');
  };

  return (
    <EntranceReveal>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />
      <div className="text-text" ref={containerRef}>
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden w-full box-border">
          <HeroBackground />
          <HeroGrid />
          <motion.main style={{ y }} className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center text-center box-border">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 mb-8 w-full box-border"
            >
                <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 max-w-full box-border">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent flex items-center gap-2 flex-wrap justify-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                        • AI Work For You | Based in Mumbai, India
                    </span>
                </div>
            </motion.div>

            <HeroTextContainer>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[1.1] mb-8 w-full box-border px-2 md:px-0">
                <HeroTextLine split className="flex justify-center">YOUR BUSINESS.</HeroTextLine>
                <HeroTextLine className="flex justify-center">RUNNING</HeroTextLine>
                <div className="flex justify-center h-24 md:h-32 items-center w-full box-border">
                  <Typewriter />
                </div>
              </h1>
            </HeroTextContainer>

            <HeroTextLine wordSplit className="max-w-xl text-lg md:text-xl text-text-muted mb-12 w-full px-4 md:px-0 box-border">
              We partner with Indian MSMEs to identify automation opportunities, deploy intelligent AI agents, and create seamless workflows that work around the clock.
            </HeroTextLine>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto px-4 md:px-0 box-border"
            >
              <button onClick={handleStartProject} className="px-8 py-4 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-all text-lg w-full sm:w-auto">
                Start a Project
              </button>
              <button className="px-8 py-4 border border-text/20 text-text font-bold rounded-full hover:bg-text/10 transition-all text-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                Watch Your Business Automate ▶
              </button>
            </motion.div>
          </motion.main>
        </section>

        <TrustBar />
        <Header4 />
        <ProblemScene />
        <AnimatedSection><CapabilitiesSection /></AnimatedSection>
        <AnimatedSection><ProcessSection /></AnimatedSection>
        <AnimatedSection><ResultsSection /></AnimatedSection>
        <AnimatedSection><FAQSection /></AnimatedSection>
        <AnimatedSection><FinalCTASection /></AnimatedSection>

      </div>
    </EntranceReveal>
  );
}
