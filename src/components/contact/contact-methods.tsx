"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactMethods() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const methods = [
    {
      icon: "💬",
      title: "Chat on WhatsApp",
      subtitle: "Fastest response — usually within 5 minutes",
      action: "+91 9322711741",
      badge: "● Online Now",
      isPrimary: true,
      href: "https://wa.me/919322711741",
      color: "#25D366",
    },
    {
      icon: "📅",
      title: "Book a Discovery Call",
      subtitle: "30-min free call — we map your automation plan",
      action: "Open Calendar →",
      href: "https://cal.com/tejovex",
      color: "#accent",
    },
    {
      icon: "📧",
      title: "Send an Email",
      subtitle: "hello@tejovexai.com",
      action: "Copy Email",
      onAction: () => {
        navigator.clipboard.writeText("hello@tejovexai.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      },
      color: "#accent",
    },
    {
      icon: "📍",
      title: "Visit Us in Mumbai",
      subtitle: "106 The Platina, Tanvi Complex, Dahisar East",
      action: "Get Directions →",
      href: "https://maps.google.com/?q=106+The+Platina,+Tanvi+Complex,+Swami+Vivekanand+Rd,+Gaurav+Tal+Patriwala+Industrial+Area,+Dahisar+East,+Mumbai,+Maharashtra+400068,+India",
      target: "_blank",
      color: "#accent",
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-text mb-2">4 Ways to Reach Us</h2>
        <p className="text-text-muted">Pick your preferred channel</p>
      </motion.div>

      <div className="space-y-4 mt-8">
        {methods.map((method, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ x: 8, backgroundColor: "rgba(0,181,252,0.04)" }}
            className={`p-6 rounded-xl border transition-all cursor-pointer group flex flex-col ${
              method.isPrimary
                ? "border-accent/50 bg-accent/5"
                : "border-text/10 bg-surface hover:border-accent/30"
            }`}
          >
            {/* Icon and Badge Row */}
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl flex-shrink-0">{method.icon}</span>
              {method.badge && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-accent font-semibold whitespace-nowrap ml-3"
                >
                  {method.badge}
                </motion.div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-text mb-1">{method.title}</h3>
              <p className="text-sm text-text-muted">{method.subtitle}</p>
            </div>

            {/* Button Section */}
            <div className="mt-6">
              <motion.a
                href={method.href || "#"}
                target={method.target || "_self"}
                rel={method.target === "_blank" ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (method.onAction) {
                    e.preventDefault();
                    method.onAction();
                  }
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block px-4 py-2 border border-accent/40 rounded-lg text-sm font-semibold text-accent hover:border-accent transition-colors"
              >
                {copiedEmail && method.action === "Copy Email" ? "Copied ✓" : method.action}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-6 mt-12 pt-8 border-t border-text/10"
      >
        {[
          { icon: "in", label: "LinkedIn", href: "#" },
          { icon: "ig", label: "Instagram", href: "#" },
          { icon: "yt", label: "YouTube", href: "#" },
          { icon: "x", label: "Twitter", href: "#" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, color: "#accent" }}
            whileTap={{ scale: 0.8 }}
            className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
          >
            {social.label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
