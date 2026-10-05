import { ServicesSection } from "@/components/services/services";
import { AgentsSection } from "@/components/agents/agents";
import { LeadDemo } from "@/components/demos/lead-demo";
import { ResultsSection } from "@/components/results/results";
import { ContactForm } from "@/components/contact/contact";
import { FrictionSection } from "@/components/friction/friction";
import { IntelligenceGrid } from "@/components/network/network";
import { ProcessSection } from "@/components/process/process";
import { IntegrationsSection } from "@/components/integrations/integrations";
import { CaseStudiesSection } from "@/components/case-studies/studies";
import { WhySection } from "@/components/why/why";
import { TestimonialsSection } from "@/components/testimonials/testimonials";
import { AboutSection } from "@/components/about/about";
import { AnimatedSection } from "@/components/ui/animated-section";
import { HeroBackground } from "@/components/hero/hero-background";
import { ProblemEngine } from "@/components/friction/problem-engine";
import { EntranceReveal } from "@/components/ui/entrance-reveal";
import { VideoBackground } from "@/components/ui/video-background";
import { HeroTextContainer, HeroTextLine } from "@/components/hero/hero-text-effect";

export default function Home() {
  return (
    <EntranceReveal>
      <div className="bg-bg text-text">
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
          <HeroBackground />
          <main className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
            <HeroTextContainer>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 mt-12">
                <HeroTextLine className="flex justify-center">YOUR BUSINESS.</HeroTextLine>
                <HeroTextLine className="flex justify-center text-accent">RUNNING INTELLIGENTLY.</HeroTextLine>
              </h1>
            </HeroTextContainer>

            <p className="max-w-xl text-lg md:text-xl text-text-muted mb-12">
              We partner with businesses to identify automation opportunities, deploy intelligent AI agents, and create seamless workflows that work around the clock.
            </p>

            <button className="px-8 py-4 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-all text-lg">
              Watch your business automate
            </button>
          </main>
        </section>

        {/* Editorial Statement */}
        <ProblemEngine />
        <AnimatedSection><FrictionSection /></AnimatedSection>
        <AnimatedSection><IntelligenceGrid /></AnimatedSection>
        <AnimatedSection>
          <VideoBackground videoSrc="/assets/1000432139.mp4">
            <ServicesSection />
          </VideoBackground>
        </AnimatedSection>
        <AnimatedSection><AgentsSection /></AnimatedSection>

        {/* Demos and Results */}
        <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto">
          <LeadDemo />
        </AnimatedSection>
        <AnimatedSection><ProcessSection /></AnimatedSection>
        <AnimatedSection><IntegrationsSection /></AnimatedSection>
        <AnimatedSection><ResultsSection /></AnimatedSection>
        <AnimatedSection><CaseStudiesSection /></AnimatedSection>
        <AnimatedSection><WhySection /></AnimatedSection>
        <AnimatedSection><TestimonialsSection /></AnimatedSection>
        <AnimatedSection><AboutSection /></AnimatedSection>
        <AnimatedSection><ContactForm /></AnimatedSection>

      </div>
    </EntranceReveal>
  );
}
