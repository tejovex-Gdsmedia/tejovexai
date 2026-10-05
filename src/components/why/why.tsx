"use client";
import React from 'react';

const reasons = [
  { title: 'ROI FIRST.', desc: 'Every system starts with a business outcome.' },
  { title: 'CUSTOM BY DESIGN.', desc: 'No generic automation templates.' },
  { title: 'BUILT TO SCALE.', desc: 'Infrastructure designed to grow with the business.' },
  { title: 'CONNECTED BY DEFAULT.', desc: 'AI works with systems already inside your business.' },
];

export const WhySection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold mb-16">WHY TEJOVEX</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {reasons.map((r, i) => (
        <div key={i} className="border-l border-surface pl-8">
          <h3 className="text-2xl font-bold mb-4">{r.title}</h3>
          <p className="text-text-muted">{r.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
