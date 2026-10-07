"use client";

import { motion } from 'framer-motion';

const problems = [
  {
    icon: "⏰",
    title: "Hours Wasted on Manual Tasks",
    desc: "Your team spends 4–6 hours daily on repetitive work — follow-ups, data entry, report generation — that should be automated.",
  },
  {
    icon: "📉",
    title: "Leads Falling Through the Cracks",
    desc: "Inquiries come in on WhatsApp, Instagram, email — and half never get a reply. Every missed lead is lost revenue.",
  },
  {
    icon: "🌙",
    title: "Business Stops When You Sleep",
    desc: "No one answering queries at 11 PM? Competitors with AI never sleep. Your business is losing customers after hours.",
  },
  {
    icon: "🔗",
    title: "Tools That Don't Talk to Each Other",
    desc: "CRM, WhatsApp, spreadsheets, email — all disconnected. Your team manually copies data between them every single day.",
  },
  {
    icon: "💸",
    title: "Scaling Means Hiring More People",
    desc: "Every time business grows, your first thought is 'hire more staff.' AI can handle 10x the work at a fraction of the cost.",
  },
  {
    icon: "📊",
    title: "No Visibility Into Your Business",
    desc: "You don't know which campaigns are working, which leads converted, or where your team's time is going — in real time.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const ProblemScene = () => {
  return (
    <section className="py-24 px-8 bg-bg text-text">
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full font-problem-badge font-normal text-4xl uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • The Problem
        </span>
      </div>

      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
        Your Business Is Leaking{" "}
        <span className="text-accent">Time, Money & Leads</span>
        <br />
        Every Single Day
      </h2>

      <p className="text-center text-text-muted text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Most Indian MSMEs are running on manual processes built for 2010.
        Here's what that's costing you right now.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {problems.map((p, i) => (
          <motion.div
            key={i}
            className="p-8 rounded-2xl border border-accent/20 bg-accent/5 hover:border-accent/50 transition-colors"
            variants={itemVariants}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="text-4xl mb-4">{p.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-text">{p.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <p className="text-text-muted text-sm mb-6">
          Sound familiar? You're not alone — and there's a fix.
        </p>
        <a
          href="#capabilities"
          className="inline-block px-8 py-4 rounded-full bg-accent text-bg font-bold text-sm hover:scale-105 transition-transform"
        >
          See How Tejovex Solves This →
        </a>
      </div>
    </section>
  );
};
