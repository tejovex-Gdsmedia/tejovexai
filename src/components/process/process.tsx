"use client";

import { Search, Code, Rocket, Activity } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const timelineData = [
  {
    id: 1,
    title: "Free AI Audit",
    date: "1 to 7 days",
    content: "We map your business processes, identify automation gaps, and present a prioritised blueprint. No tech knowledge needed.",
    category: "Audit",
    icon: Search,
    relatedIds: [2],
    status: "pending" as const,
    energy: 20,
  },
  {
    id: 2,
    title: "Design & Build",
    date: "1 to 7 days",
    content: "Our team builds your custom AI workflows using n8n, WhatsApp API, and AI agents — tested before a single line goes live.",
    category: "Build",
    icon: Code,
    relatedIds: [1, 3],
    status: "pending" as const,
    energy: 45,
  },
  {
    id: 3,
    title: "Launch & Integrate",
    date: "1 to 7 days",
    content: "We connect all your tools — CRM, WhatsApp, email, spreadsheets — and go live. You see results from Day 1.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Monitor & Optimise",
    date: "1 to 7 days",
    content: "We track performance, fix errors, and keep improving your automations as your business grows.",
    category: "Optimise",
    icon: Activity,
    relatedIds: [3],
    status: "completed" as const,
    energy: 100,
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-8 bg-bg/80 text-text">
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full font-badge font-normal text-4xl uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • Process
        </span>
      </div>

      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
        From Idea to Automation
        <br />
        <span className="text-accent">in 1 to 7 days</span>
      </h2>

      <p className="text-center text-text-muted text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        We handle everything — strategy, build, launch, and support. You just show up and approve.
      </p>

      <div className="max-w-4xl mx-auto">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
      <p className="text-center text-text-muted text-xs uppercase tracking-widest mt-4">
        Tap a step to see details
      </p>

      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full bg-accent text-bg font-bold text-sm hover:scale-105 transition-transform"
        >
          Book Your Free AI Audit →
        </a>
      </div>
    </section>
  );
};
