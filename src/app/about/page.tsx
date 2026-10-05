"use client";
import React from 'react';
import { AboutHero } from '@/components/about/about-hero';
import { AboutValues } from '@/components/about/about-values';
import { AboutStack } from '@/components/about/about-stack';
import { AboutResults } from '@/components/about/about-results';
import { AboutIndustries } from '@/components/about/about-industries';
import { AboutTestimonials } from '@/components/about/about-testimonials';
import { AboutCTA } from '@/components/about/about-cta';

export default function AboutPage() {
  return (
    <div className="bg-bg text-text">
        <AboutHero />
        <AboutValues />
        <AboutStack />
        <AboutResults />
        <AboutIndustries />
        <AboutTestimonials />
        <AboutCTA />
    </div>
  );
}
