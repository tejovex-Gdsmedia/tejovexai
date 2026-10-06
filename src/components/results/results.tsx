"use client";

import { motion } from 'framer-motion';

const cases = [
  {
    industry: "Healthcare",
    client: "Dr. Sumita Agrawal (Pulmonologist, Jodhpur)",
    problem: "Manual appointment follow-ups, missed patient queries",
    solution: "AI patient chatbot + WhatsApp appointment automation",
    results: [
      "↓ 80% drop in missed appointments",
      "↑ 3× faster query response time",
      "✓ 24/7 patient support without extra staff",
    ],
  },
  {
    industry: "Aesthetics Clinic",
    client: "Facematic Aesthetics (Borivali West, Mumbai)",
    problem: "Leads from Instagram not being followed up fast enough",
    solution: "AI lead capture + WhatsApp auto-follow-up + CRM sync",
    results: [
      "↑ 40% more leads converted",
      "↓ 90% reduction in manual follow-up time",
      "✓ Google Ads + SEO traffic captured automatically",
    ],
  },
  {
    industry: "CA Firm",
    client: "Deepak Singhania & Associates",
    problem: "Lead qualification done manually over WhatsApp",
    solution: "WhatsApp AI bot with CRM integration",
    results: [
      "↓ 70% time saved on initial client screening",
      "✓ Leads pre-qualified before human ever speaks to them",
      "✓ CRM auto-populated with every lead detail",
    ],
  },
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 px-8 bg-bg text-text">
      {/* Label */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • Results
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
        Real Automations.
        <br />
        <span className="text-accent">Real Indian Businesses.</span>
        <br />
        Real ROI.
      </h2>

      {/* Subheadline */}
      <p className="text-center text-text-muted text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Here's what happens when Tejovex deploys AI in your business.
      </p>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {cases.map((c, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-accent/20 bg-accent/5"
          >
            <div className="text-accent font-mono text-sm mb-4">{c.industry}</div>
            <h3 className="text-lg font-bold mb-4 text-text">{c.client}</h3>

            <div className="space-y-4 text-sm mb-6">
              <p><strong className="text-accent">Problem:</strong> {c.problem}</p>
              <p><strong className="text-accent">Solution:</strong> {c.solution}</p>
            </div>

            <ul className="space-y-2 text-sm text-text-muted">
              {c.results.map((res, j) => (
                <li key={j}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="text-center max-w-2xl mx-auto p-8 rounded-2xl bg-accent/10 border border-accent/20">
        <p className="text-lg italic mb-4">
          "Tejovex built us an AI system that works while we sleep.
           Our team now focuses on actual work, not admin."
        </p>
        <p className="text-sm font-mono text-accent">— Client, Mumbai MSME</p>
      </div>
    </section>
  );
};
