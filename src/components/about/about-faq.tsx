"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'What exactly does Tejovex do?', a: 'We build AI-powered automation systems tailored for Indian businesses to save time and increase revenue.' },
  { q: 'How long does implementation take?', a: 'Most projects are deployed within 1 to 7 days, depending on complexity.' },
  { q: 'Do we need a tech team?', a: 'No, we handle the technical side, monitoring, and maintenance.' },
  { q: 'How many projects have you delivered?', a: 'We have successfully delivered over 120+ AI projects.' },
  { q: 'Can small businesses with limited budget use you?', a: 'Yes, we have modular solutions designed specifically for growing businesses.' },
];

export default function AboutFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-surface text-text">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="border-b border-text/10"
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            className="w-full flex justify-between items-center py-6 text-xl font-bold"
                        >
                            {faq.q}
                            <span className="text-accent">{activeIndex === i ? '−' : '+'}</span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden text-text-muted"
                                >
                                    <p className="pb-6">{faq.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
