"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const LeadDemo = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { label: "Lead Arrives", action: "NEW LEAD" },
    { label: "AI Qualifies", action: "AI QUALIFIES" },
    { label: "CRM Updates", action: "CRM UPDATED" },
    { label: "Follow-up Sent", action: "FOLLOW-UP SENT" },
    { label: "Meeting Booked", action: "MEETING BOOKED" },
    { label: "Done", action: "Handled automatically." },
  ];

  return (
    <div className="p-8 border border-surface rounded-2xl bg-surface/30">
      <h3 className="text-xl font-bold mb-6">DEMO: LEAD QUALIFICATION</h3>
      <div className="space-y-4">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: i <= step ? 1 : 0.3, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className={`w-3 h-3 rounded-full ${i <= step ? 'bg-accent' : 'bg-surface'}`} />
            <span className="font-mono text-sm">{s.action}</span>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => setStep((s) => (s + 1) % steps.length)}
        className="mt-8 px-4 py-2 bg-accent text-bg font-bold rounded-full text-xs"
      >
        Trigger Automation
      </button>
    </div>
  );
};
