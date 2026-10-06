"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { AnimatedSection } from '../ui/animated-section';

export const AboutCTA = () => {
    const router = useRouter();

    const handleStartProject = () => {
        router.push('/contact#contact-form');
    };

    return (
        <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto text-center bg-surface/5 border-t border-surface">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Intelligent Things</h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">Turn repetitive work into intelligent systems. Connect your tools. Automate your workflows. Give your team more time to focus on growth.</p>
            <div className="flex gap-4 justify-center">
                <button onClick={handleStartProject} className="px-8 py-4 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-all text-lg">Start a Project</button>
                <button className="px-8 py-4 bg-surface text-text font-bold rounded-full hover:bg-surface/80 transition-all text-lg">Talk to Us</button>
            </div>
            <div className='mt-12 text-text-muted'>
                <p>contact@tejovexai.com | 7400168255</p>
                <p>Mumbai, India</p>
            </div>
        </AnimatedSection>
    );
};
