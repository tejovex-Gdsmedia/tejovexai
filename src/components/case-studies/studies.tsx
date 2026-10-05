"use client";
import React from 'react';

const studies = [
  { industry: 'Healthcare', problem: 'Patient enquiries handled manually.', result: 'Automated scheduling, 24/7 support.' },
  { industry: 'Real Estate', problem: 'Manual lead management.', result: 'Streamlined sales agents.' },
  { industry: 'Finance', problem: 'Tedious daily procedures.', result: 'Digitized daily procedures.' },
  { industry: 'E-commerce', problem: 'Low engagement.', result: 'Boosted engagement via chat.' },
];

export const CaseStudiesSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold mb-16">CASE STUDIES</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {studies.map((s, i) => (
        <div key={i} className="border border-surface p-8 rounded-3xl bg-surface/20">
          <h3 className="text-2xl font-bold mb-4">{s.industry}</h3>
          <p className="text-text-muted mb-2 font-mono">PROBLEM: {s.problem}</p>
          <p className="text-accent font-bold">RESULT: {s.result}</p>
        </div>
      ))}
    </div>
  </section>
);
