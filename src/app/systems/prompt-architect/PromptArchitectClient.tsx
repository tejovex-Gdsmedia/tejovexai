"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ScrollProgressBar } from '@/components/shared/ScrollProgressBar';

export default function PromptArchitectClient() {
  const router = useRouter();

  const features = [
    {
      icon: "✦",
      title: "Build Better Prompts",
      description: "Design AI prompts that actually work for your specific business use case — not generic templates."
    },
    {
      icon: "✦",
      title: "Test in Real Time",
      description: "See how your prompt performs instantly. Tweak, iterate and improve without any code."
    },
    {
      icon: "✦",
      title: "Save & Reuse",
      description: "Save your best prompts and reuse them across your automation workflows."
    },
    {
      icon: "✦",
      title: "Built for Indian MSMEs",
      description: "Designed specifically for WhatsApp bots, lead follow-ups, support agents and sales automation."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg text-text"
    >
      <ScrollProgressBar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] w-full bg-bg flex flex-col items-center justify-center overflow-hidden pt-20 px-8">
        {/* Animated Orbs */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 blur-[150px] opacity-30"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-accent-secondary/20 blur-[200px] opacity-10"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          style={{ top: "20%", right: "10%" }}
        />

        <div className="relative z-10 text-center max-w-4xl">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent text-sm uppercase tracking-widest mb-8"
          >
            • AI Systems
          </motion.div>

          {/* Main Headline - Word Reveal */}
          <motion.div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {["Prompt", "Architect"].map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + i * 0.07,
                    }}
                    className="text-5xl md:text-6xl font-bold text-text inline-block"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The smartest way to build, test, and refine AI prompts for your business workflows — live, ready to use, and built for results.
          </motion.div>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://prompter-rust.vercel.app/en', '_blank')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: '#f0c8a0',
                color: '#0f0f0f'
              }}
            >
              Open Prompt Architect ↗
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
              className="px-8 py-3 rounded-lg font-semibold border transition-all"
              style={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'white'
              }}
            >
              ← Back to Systems
            </motion.button>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            🟢 Free to use · No signup required
          </motion.div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="py-20 px-8 bg-bg">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-text mb-16 text-center"
          >
            What is Prompt Architect?
          </motion.h2>

          <div className="space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="flex gap-6 p-6 rounded-xl border border-text/10 bg-surface"
              >
                <div className="text-2xl flex-shrink-0" style={{ color: '#f0c8a0' }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-8 bg-bg">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-text mb-12 text-center"
          >
            See It Live
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-text/10"
          >
            <iframe
              src="https://prompter-rust.vercel.app/en"
              title="Prompt Architect Preview"
              className="w-full bg-white"
              style={{
                height: '600px',
                border: 'none',
              }}
            />

            {/* Gradient Overlay at Bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(255,255,255,0.1), transparent)'
              }}
            />

            {/* Open Full Screen Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://prompter-rust.vercel.app/en', '_blank')}
              className="absolute bottom-6 right-6 px-4 py-2 rounded-lg font-semibold text-sm transition-all"
              style={{
                backgroundColor: '#f0c8a0',
                color: '#0f0f0f'
              }}
            >
              Open Full Screen ↗
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text mb-8"
          >
            Ready to use Prompt Architect in your business?
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://prompter-rust.vercel.app/en', '_blank')}
            className="px-8 py-3 rounded-lg font-semibold transition-all mb-6"
            style={{
              backgroundColor: '#f0c8a0',
              color: '#0f0f0f'
            }}
          >
            Open Prompt Architect ↗
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-text-muted"
          >
            More AI tools coming soon —{' '}
            <span style={{ color: '#f0c8a0' }} className="font-semibold">
              Join the waitlist
            </span>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
