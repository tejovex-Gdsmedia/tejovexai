"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/animated-section';

const industries = [
  { name: "Healthcare", problem: "Patient Experience", solution: "AI Support & Scheduling" },
  { name: "Real Estate", problem: "Lead Management", solution: "AI Sales Agents" },
  { name: "Finance", problem: "Process Automation", solution: "AI Workflow Systems" },
  { name: "E-commerce", problem: "Customer Support", solution: "AI Chat & Marketing" },
];

export const AboutIndustries = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tejovex Industries</h2>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col gap-4">
                    {industries.map((industry, index) => (
                        <button key={index} className={`text-left p-6 rounded-xl transition-colors ${activeIndex === index ? 'bg-surface/20 border-l-4 border-accent' : 'bg-surface/5'}`} onClick={() => setActiveIndex(index)}>
                            <h3 className="text-2xl font-bold">{industry.name}</h3>
                        </button>
                    ))}
                </div>
                <div className="flex-grow p-12 bg-surface/10 rounded-3xl border border-surface">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                            <h4 className="text-xl text-text-muted mb-2">Problem</h4>
                            <p className="text-3xl font-bold mb-8">{industries[activeIndex].problem}</p>
                            <h4 className="text-xl text-text-muted mb-2">Solution</h4>
                            <p className="text-3xl font-bold text-accent">{industries[activeIndex].solution}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </AnimatedSection>
    );
};
