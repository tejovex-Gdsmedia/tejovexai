"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/animated-section';

const testimonials = [
  { name: "Rahul Sharma", title: "Sales Director, Mumbai", quote: "Tejovex AI helped us automate our lead qualification process and follow-ups. What used to take hours every day is now handled automatically, allowing our sales team to focus on closing deals." },
  { name: "Pankaj Mishra", title: "Founder, Ahmedabad", quote: "The AI customer support agent significantly reduced our response time and improved customer satisfaction. Our customers now get instant answers 24/7." },
  { name: "Ankit Singh", title: "Operations Manager, Surat", quote: "We wanted to automate repetitive operational tasks but didn't know where to start. The Tejovex AI team designed a solution that saved our staff countless hours every week." },
];

export const AboutTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <AnimatedSection className="py-24 px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">What Our Clients Say</h2>
            <div className="relative p-12 bg-surface/10 rounded-3xl border border-surface min-h-[300px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='max-w-3xl'>
                        <p className="text-2xl md:text-3xl italic mb-8">"{testimonials[activeIndex].quote}"</p>
                        <p className="text-xl font-bold">{testimonials[activeIndex].name}</p>
                        <p className="text-text-muted">{testimonials[activeIndex].title}</p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button key={index} className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-accent' : 'bg-surface'}`} onClick={() => setActiveIndex(index)} />
                ))}
            </div>
        </AnimatedSection>
    );
};
