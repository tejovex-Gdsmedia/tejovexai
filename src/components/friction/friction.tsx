"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const FrictionSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto bg-surface/10 rounded-3xl">
    <h2 className="text-5xl font-bold mb-12">YOUR TEAM IS BUSY. <br/> YOUR SYSTEMS AREN'T CONNECTED.</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[ 'Lead check', 'CRM update', 'WhatsApp', 'Follow-up', 'Spreadsheet', 'Reporting', 'Customer support', 'Manual tasks' ].map((item, i) => (
        <motion.div key={i} className="p-4 bg-surface/50 border border-surface rounded-lg font-mono text-sm">
          {item}
        </motion.div>
      ))}
    </div>
  </section>
);
