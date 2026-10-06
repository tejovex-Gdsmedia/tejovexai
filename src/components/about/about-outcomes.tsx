"use client";

import { motion } from 'framer-motion';
import { CountUpNumber } from '../shared/CountUpNumber';
import { WordReveal } from '../shared/WordReveal';

const stats = [
    { label: 'Reduction in Manual Tasks', value: 75, unit: '%' },
    { label: 'Faster Lead Response', value: 3, unit: '×' },
    { label: 'AI Support Running', value: 24, unit: '/7' },
    { label: 'Projects Delivered', value: 120, unit: '+' },
];

const outcomes = [
    'Lead Gen Automation', 'Support Automation', 'AI Sales Agent',
    'Lead Management', 'Finance Workflows', 'Results Dashboard',
    'Customer Support Bot'
];

export default function AboutOutcomes() {
    return (
        <section className="py-20 bg-surface text-text">
            <div className="container mx-auto px-6 text-center">
                <WordReveal text="Business Outcomes" className="text-4xl font-bold mb-12 justify-center" />

                <motion.div
                    initial={{ scale: 0.3, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-9xl font-bold text-accent mb-20"
                >
                    <motion.span>3x</motion.span>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-bg p-6 rounded-xl border border-text/10"
                        >
                            <div className="text-4xl font-bold mb-2 text-accent-secondary">
                                <CountUpNumber value={s.value} suffix={s.unit} />
                            </div>
                            <div className="text-sm text-text-muted">{s.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-left max-w-md mx-auto">
                    {outcomes.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-4 py-2"
                        >
                            <span className="text-accent">✓</span> {o}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
