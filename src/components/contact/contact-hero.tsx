"use client";

import { motion } from 'framer-motion';

export default function ContactHero() {
  const words = "Let's Build Intelligent Things".split(' ');

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
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
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-accent/15 blur-[120px] opacity-20"
        animate={{ x: [0, 20, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        style={{ bottom: "10%", left: "50%" }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-accent text-sm uppercase tracking-widest mb-8"
        >
          • Let's Build Something Intelligent
        </motion.div>

        {/* Main Headline - Word Reveal */}
        <motion.div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {words.map((word, i) => (
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

        {/* Sub Text - Character Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Tell us about your business — we'll show you exactly where AI can save you time and money.
        </motion.div>

        {/* Contact Pills */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: "💬", label: "WhatsApp Us", href: "https://wa.me/917400168255" },
            { icon: "📅", label: "Book a Call", href: "https://calendly.com/gdstejovex/tejovexai" },
            { icon: "📧", label: "Email Us", href: "mailto:hello@tejovexai.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.94 }}
              className="px-6 py-3 border border-accent/40 rounded-full text-accent hover:border-accent hover:bg-accent/10 transition-colors cursor-pointer"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent text-sm"
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
