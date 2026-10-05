"use client";
import React from 'react';
import { AboutHero } from '@/components/about/about-hero';
import { AboutValues } from '@/components/about/about-values';

export default function AboutPage() {
  return (
    <div className="bg-bg text-text">
        <AboutHero />
        <AboutValues />
    </div>
  );
}
