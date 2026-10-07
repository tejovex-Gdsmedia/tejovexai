"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ServiceCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="p-8 rounded-2xl border border-accent/20 bg-accent/5 hover:border-accent/50 transition-colors"
      variants={itemVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }}
    >
      <motion.div className="text-4xl mb-4" whileHover={{ rotate: 360 }}>{icon}</motion.div>
      <h3 className="text-lg font-bold mb-2 text-text">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const services = [
  {
    icon: "🧠",
    title: "AI Business Ops",
    desc: "Automate your daily operations — reports, invoices, approvals, internal workflows. Your business runs even when you don't.",
  },
  {
    icon: "💰",
    title: "AI Sales",
    desc: "AI agents follow up with every lead, qualify prospects, book appointments, and push deals forward — automatically, 24/7.",
  },
  {
    icon: "📣",
    title: "AI Marketing",
    desc: "Content creation, social scheduling, email sequences, WhatsApp broadcasts — all powered by AI, all running on autopilot.",
  },
  {
    icon: "💬",
    title: "AI Customer Support",
    desc: "Deploy intelligent chatbots on WhatsApp, website, and Instagram. Instant replies, zero wait time, zero missed queries.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const CapabilitiesSection = () => {
  const router = useRouter();

  const handleStartProject = () => {
    router.push('/contact#contact-form');
  };

  return (
    <section id="capabilities" className="py-24 px-8 bg-bg/80 text-text">
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full font-badge font-normal text-4xl uppercase tracking-widest border border-accent/40 bg-accent/10 text-accent">
          • Capabilities
        </span>
      </div>

      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
        Turning AI Potential Into
        <br />
        <span className="text-accent">Business Performance</span>
      </h2>

      <p className="text-center text-text-muted text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        We identify the highest-impact automation opportunities in your business and deploy AI agents that actually work.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </motion.div>

      <div className="text-center">
        <button
          onClick={handleStartProject}
          className="inline-block px-8 py-4 rounded-full bg-accent text-bg font-bold text-sm hover:scale-105 transition-transform"
        >
          Start a Project →
        </button>
      </div>
    </section>
  );
};
