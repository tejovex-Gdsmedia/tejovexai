"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });

  React.useEffect(() => {
    // Scroll to form if hash is present
    if (typeof window !== 'undefined' && window.location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  const [selectedPills, setSelectedPills] = useState<string[]>([]);
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const pills = [
    'WhatsApp Automation',
    'Lead Follow-ups',
    'Customer Support',
    'Sales Pipeline',
    'HR & Recruitment',
    'Reports & Invoices',
    'Social Media',
    'Something Else',
  ];

  const industries = [
    'Healthcare / Clinic',
    'CA / Finance Firm',
    'Retail / E-commerce',
    'Manufacturing',
    'Real Estate',
    'Hospitality',
    'Education',
    'Other',
  ];

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
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          automationNeeds: selectedPills.join(', '),
          message: formData.message
        })
      });

      setSubmitState('success');
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', company: '', industry: '', message: '' });
        setSelectedPills([]);
        setCharCount(0);
        setSubmitState('idle');
      }, 2000);
    } catch {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 3000);
    }
  };

  const togglePill = (pill: string) => {
    setSelectedPills((prev) =>
      prev.includes(pill) ? prev.filter((p) => p !== pill) : [...prev, pill]
    );
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
      className="p-10 rounded-2xl border border-text/10 bg-surface backdrop-blur"
    >
      <h3 className="text-3xl font-bold text-text mb-2">Start Your AI Journey</h3>
      <p className="text-text-muted mb-8">Free audit included with every enquiry</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="block text-sm font-semibold text-text-muted mb-2">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-bg border border-text/10 rounded-lg text-text placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            required
          />
        </motion.div>

        {/* Phone Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="phone" className="block text-sm font-semibold text-text-muted mb-2">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98XXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-bg border border-text/10 rounded-lg text-text placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            required
          />
          <p className="text-xs text-text-muted mt-1">We'll WhatsApp you on this number</p>
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-text-muted mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="rahul@yourcompany.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-bg border border-text/10 rounded-lg text-text placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            required
          />
        </motion.div>

        {/* Company Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.64, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="company" className="block text-sm font-semibold text-text-muted mb-2">Company / Business Name</label>
          <input
            id="company"
            type="text"
            placeholder="Your Business Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-bg border border-text/10 rounded-lg text-text placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            required
          />
        </motion.div>

        {/* Industry Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="industry" className="block text-sm font-semibold text-text-muted mb-2">Industry</label>
          <select
            id="industry"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full px-4 py-3 bg-bg border border-text/10 rounded-lg text-text focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            required
          >
            <option value="">Select an industry</option>
            {industries.map((ind) => (
              <option key={ind} value={ind} className="bg-bg">
                {ind}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Multi-Select Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="automation-pills" className="block text-sm font-semibold text-text-muted mb-4">What do you want to automate?</label>
          <div id="automation-pills" className="flex flex-wrap gap-3">
            {pills.map((pill) => (
              <motion.button
                key={pill}
                type="button"
                onClick={() => togglePill(pill)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPills.includes(pill)
                    ? 'bg-accent text-bg border border-accent'
                    : 'border border-text/10 text-text hover:border-accent/50 bg-surface'
                }`}
              >
                {pill}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-text-muted mb-2">Message</label>
          <textarea
            id="message"
            placeholder="Tell us about your business and what's eating most of your time..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              setCharCount(e.target.value.length);
            }}
            maxLength={500}
            rows={4}
            className="w-full px-4 py-3 bg-bg border border-text/10 rounded-lg text-text placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
          />
          <div className={`text-xs mt-2 ${charCount > 100 ? 'text-accent' : 'text-text-muted'}`}>
            {charCount} / 500 characters
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.96, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            disabled={submitState === 'loading'}
            className="w-full h-14 bg-accent text-bg font-bold rounded-lg hover:bg-accent/90 transition-all disabled:opacity-80 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitState === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Send Message →
                </motion.div>
              )}
              {submitState === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full"
                  />
                  Sending...
                </motion.div>
              )}
              {submitState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  ✓ Message Sent! We'll WhatsApp you soon
                </motion.div>
              )}
              {submitState === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 bg-red-500"
                >
                  Failed to send. Try WhatsApp instead →
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-text-muted mt-4">
            <span>🔒</span>
            Your info is safe — no spam, ever.
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
}
