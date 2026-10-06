"use client";

import { motion } from 'framer-motion';

const tools = [
  'n8n', 'Claude AI', 'OpenAI', 'Google AI', 'WhatsApp API',
  'AutomateChats', 'Zapier', 'Make', 'Zoho CRM', 'HubSpot',
  'Google Sheets', 'Notion', 'Pabbly', 'Airtable'
];

export default function AboutTechStack() {
  return (
    <section className="py-20 bg-bg text-text overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold">Tools We Use</h2>
      </div>

      <div className="flex flex-col gap-8">
        <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            {[...tools, ...tools].map((tool, i) => (
                <div key={i} className="text-2xl font-bold opacity-60 hover:opacity-100 hover:scale-125 transition-all text-text-muted">
                    {tool}
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
