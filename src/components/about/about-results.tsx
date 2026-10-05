"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/animated-section';

const outcomes = [
  { label: "Reduction in Manual Tasks", value: "70%" },
  { label: "Customer Support Speed", value: "Super Fast" },
  { label: "Lead Response Time", value: "3x Faster" },
  { label: "Team Productivity", value: "Increased" },
  { label: "Operational Costs", value: "Lower" },
];

export const AboutResults = () => {
    return (
        <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Business Outcomes We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {outcomes.map((outcome, index) => (
                    <motion.div key={index} className="p-8 border-l-2 border-accent" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                        <h3 className="text-4xl font-bold text-accent mb-2">{outcome.value}</h3>
                        <p className="text-xl font-medium">{outcome.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 p-12 bg-surface/10 rounded-3xl border border-surface text-center">
                <h3 className="text-4xl font-bold mb-6">AI Solutions That Deliver Measurable Results</h3>
                <p className="text-text-muted mb-12 max-w-2xl mx-auto">We help businesses reduce manual effort, improve operational efficiency, and unlock growth through intelligent automation. Every solution is built with performance, scalability, and ROI in mind.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="text-5xl font-bold mb-2">70%</div>
                        <div className="text-text-muted">Operational Efficiency Improvement</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold mb-2">3X</div>
                        <div className="text-text-muted">Faster Lead Response Time</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold mb-2">100%</div>
                        <div className="text-text-muted">24/7 Customer Availability</div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};
