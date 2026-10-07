"use client";

import { motion } from 'framer-motion';

export default function AboutContactForm() {
    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-bg text-text">
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
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="w-full space-y-6"
                >
                    {['Name', 'Email', 'Phone', 'Company'].map((field, i) => (
                        <motion.div key={field} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                            <label className="block text-sm text-text-muted mb-2">{field}</label>
                            <input type="text" className="w-full bg-surface border-b border-text/20 focus:border-accent focus:ring-0 p-2 text-text transition-colors" />
                        </motion.div>
                    ))}
                    <motion.div>
                        <label className="block text-sm text-text-muted mb-2">Message</label>
                        <textarea className="w-full bg-surface border-b border-text/20 focus:border-accent focus:ring-0 p-2 text-text transition-colors" rows={4}></textarea>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.04, backgroundColor: 'var(--color-accent)' }}
                        whileTap={{ scale: 0.96 }}
                        className="w-full bg-text text-bg py-3 rounded-full font-bold transition-colors"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
