"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: "Shifting lead follow-ups to the software freed my staff to focus on closing deals.", client: "Rahul Sharma, Sales Director" },
  { quote: "Deploying an intelligent chat assistant drastically shrank wait times and elevated satisfaction.", client: "Pankaj Mishra, Founder" },
  { quote: "Custom architecture spared my employees countless hours every week.", client: "Ankit Singh, Operations Manager" },
];

export const TestimonialsSection = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto text-center">
    <div className="space-y-16">
      {testimonials.map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-4">
          <p className="text-3xl font-light italic">"{t.quote}"</p>
          <span className="text-text-muted font-mono text-sm">{t.client}</span>
        </motion.div>
      ))}
    </div>
  </section>
);
