"use client";

import { motion } from 'framer-motion';

const tools = ['CRM', 'WhatsApp', 'Email', 'ERP', 'HRMS', 'Marketing', 'Databases', 'Analytics'];

export const IntegrationsSection = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center overflow-hidden">
      <h2 className="text-5xl font-bold mb-20">YOUR TOOLS.<br/>NOW WORKING TOGETHER.</h2>

      <div className="relative h-[500px] flex items-center justify-center">
        {/* Central Core */}
        <div className="w-24 h-24 rounded-full bg-accent text-bg flex items-center justify-center font-bold absolute z-10">
          CORE
        </div>

        {/* Tools around the core */}
        {tools.map((tool, i) => {
          const angle = (i * 360) / tools.length;
          const x = Math.cos(angle * Math.PI / 180) * 180;
          const y = Math.sin(angle * Math.PI / 180) * 180;

          return (
            <motion.div
              key={tool}
              className="absolute px-6 py-3 border border-surface rounded-full font-mono text-sm bg-bg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {tool}
            </motion.div>
          );
        })}

        {/* Animated Connections */}
        <svg className="absolute inset-0 w-full h-full -z-0">
             {tools.map((_, i) => {
                 const angle = (i * 360) / tools.length;
                 const x = 50 + (Math.cos(angle * Math.PI / 180) * 35);
                 const y = 50 + (Math.sin(angle * Math.PI / 180) * 35);
                 return (
                     <motion.line
                        key={i}
                        x1="50%" y1="50%"
                        x2={`${x}%`} y2={`${y}%`}
                        stroke="var(--accent)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                     />
                 )
             })}
        </svg>
      </div>
    </section>
  );
};
