"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { WordReveal } from '../shared/WordReveal';
import { MagneticButton } from '../shared/MagneticButton';

export default function AboutHero() {
    const router = useRouter();

    const handleStartProject = () => {
        router.push('/contact#contact-form');
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Orbs */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px] opacity-30 pointer-events-none"
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-accent-secondary/20 blur-[120px] opacity-20 pointer-events-none"
                animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-sm uppercase tracking-widest mb-4"
            >
                • About Us
            </motion.div>

            <WordReveal
                text="Building the Future of Business with AI"
                className="text-6xl font-bold text-text mb-6 text-center justify-center max-w-4xl"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-text-muted text-lg mb-8 text-center max-w-lg"
            >
                We don't just implement technology — we rethink how your business operates from the ground up.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={handleStartProject}
                className="px-8 py-4 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-all"
            >
                Start a Project →
            </motion.button>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-10 text-text flex items-center gap-2 border border-text/20 px-4 py-2 rounded-full"
            >
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Based in Mumbai, India
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-5 text-text"
            >
                ↓
            </motion.div>
        </section>
    );
}
