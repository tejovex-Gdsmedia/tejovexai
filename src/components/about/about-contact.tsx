"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AboutContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const fieldKeys: Record<string, keyof typeof formData> = {
        Name: 'name',
        Email: 'email',
        Phone: 'phone',
        Company: 'company',
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitState('loading');

        try {
            await fetch(process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL!, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    submittedAt: new Date().toISOString(),
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    message: formData.message,
                }),
            });

            setSubmitState('success');
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                setSubmitState('idle');
            }, 2000);
        } catch {
            setSubmitState('error');
            setTimeout(() => setSubmitState('idle'), 3000);
        }
    };

    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-bg/80 text-text">
            <div className="md:w-1/2 bg-accent-secondary text-white p-20 flex flex-col justify-center">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-5xl font-bold mb-8"
                >
                    Let's Build Intelligent Things
                </motion.h2>
                <div className="space-y-4">
                    {['Mumbai India', 'Worldwide Projects',
                      <a
                        key="whatsapp"
                        href="https://wa.me/7400168255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        WhatsApp Support
                      </a>
                      ,
                      'Reply in 24hrs'].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-accent">●</span> {item}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="md:w-1/2 bg-surface p-20 flex items-center">
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="w-full space-y-6"
                >
                    {['Name', 'Email', 'Phone', 'Company'].map((field, i) => {
                        const key = fieldKeys[field];
                        return (
                            <motion.div key={field} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                                <label className="block text-sm text-text-muted mb-2">{field}</label>
                                <input
                                    type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                                    value={formData[key]}
                                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                                    required
                                    className="w-full bg-surface border-b border-text/20 focus:border-accent focus:ring-0 p-2 text-text transition-colors"
                                />
                            </motion.div>
                        );
                    })}
                    <motion.div>
                        <label className="block text-sm text-text-muted mb-2">Message</label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-surface border-b border-text/20 focus:border-accent focus:ring-0 p-2 text-text transition-colors"
                            rows={4}
                        ></textarea>
                    </motion.div>
                    <motion.button
                        type="submit"
                        disabled={submitState === 'loading'}
                        whileHover={{ scale: 1.04, backgroundColor: 'var(--color-accent)' }}
                        whileTap={{ scale: 0.96 }}
                        className="w-full bg-text text-bg py-3 rounded-full font-bold transition-colors disabled:opacity-80"
                    >
                        <AnimatePresence mode="wait">
                            {submitState === 'idle' && (
                                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    Send Message
                                </motion.span>
                            )}
                            {submitState === 'loading' && (
                                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    Sending...
                                </motion.span>
                            )}
                            {submitState === 'success' && (
                                <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    ✓ Message Sent!
                                </motion.span>
                            )}
                            {submitState === 'error' && (
                                <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    Failed to send. Try WhatsApp instead →
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
