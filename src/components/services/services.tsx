"use client";

import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/atoms';

const services = [
  { id: '01', title: 'AI BUSINESS OPERATIONS', desc: 'Enhance operational visibility by handling reporting, approvals, and internal workflows.' },
  { id: '02', title: 'AI SALES AUTOMATION', desc: 'Accelerate pipelines through automated CRM updates, meeting scheduling, and lead qualification.' },
  { id: '03', title: 'AI MARKETING AUTOMATION', desc: 'Administer promotional campaigns, generate content, and track analytical performance.' },
];

export const ServicesSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <SectionHeading className="mb-16">CAPABILITIES</SectionHeading>
    <div className="flex flex-col gap-12">
      {services.map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-surface pt-12 flex items-start gap-8"
        >
          <span className="text-accent text-xl font-bold">{service.id}</span>
          <div>
            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
            <p className="text-text-muted text-lg max-w-2xl">{service.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
