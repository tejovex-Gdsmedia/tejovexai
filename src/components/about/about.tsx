"use client";
import React from 'react';

export const AboutSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto border-t border-surface">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-5xl font-bold mb-6">ABOUT TEJOVEX</h2>
        <p className="text-xl text-text-muted">Turning AI Potential Into Business Performance.</p>
      </div>
      <div className="font-mono text-sm space-y-4">
        <p>Available for worldwide projects.</p>
        <p>Based in Mumbai, India.</p>
      </div>
    </div>
  </section>
);
