"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    step: "01",
    title: "Free AI Audit",
    time: "Week 1–2",
    desc: "We map your business processes, identify automation gaps, and present a prioritised blueprint. No tech knowledge needed.",
  },
  {
    step: "02",
    title: "Design & Build",
    time: "Week 2–4",
    desc: "Our team builds your custom AI workflows using n8n, WhatsApp API, and AI agents — tested before a single line goes live.",
  },
  {
    step: "03",
    title: "Launch & Integrate",
    time: "Week 4–6",
    desc: "We connect all your tools — CRM, WhatsApp, email, spreadsheets — and go live. You see results from Day 1.",
  },
  {
    step: "04",
    title: "Monitor & Optimise",
    time: "Week 6+",
    desc: "We track performance, fix errors, and keep improving your automations as your business grows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-8 bg-bg text-text">
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full font-badge font-normal text-4xl uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • Process
        </span>
      </div>

      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
        From Idea to Automation
        <br />
        <span className="text-accent">in 8–10 Weeks</span>
      </h2>

      <p className="text-center text-text-muted text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        We handle everything — strategy, build, launch, and support. You just show up and approve.
      </p>

      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-6 p-6 rounded-2xl border border-accent/20 bg-accent/5"
            variants={itemVariants}
          >
            <div className="text-accent font-mono font-bold text-lg pt-1">
              Step {s.step}
            </div>
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-xl font-bold text-text">{s.title}</h3>
                <span className="text-xs font-mono uppercase tracking-widest text-accent/80">
                  {s.time}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full bg-accent text-bg font-bold text-sm hover:scale-105 transition-transform"
        >
          Book Your Free AI Audit →
        </a>
      </div>
    </section>
  );
};
