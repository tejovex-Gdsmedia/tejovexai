"use client";

import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Tejovex built us a WhatsApp AI that qualifies leads before our team picks up the phone. 3 hours saved daily.', author: 'CA Firm Owner, Mumbai' },
  { quote: 'Our clinic handles bookings, reminders and follow-ups automatically. Patients love the instant responses.', author: 'Doctor, Jodhpur' },
  { quote: 'Every Instagram lead now gets an instant reply and enters our CRM automatically. Game changer.', author: 'Aesthetics Clinic, Borivali' },
];

export default function AboutTestimonials() {
  return (
    <section className="py-20 bg-bg/80 text-text">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ rotateX: 20, y: 60, opacity: 0 }}
              whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-surface p-8 rounded-xl border border-text/10"
            >
              <p className="text-text-muted mb-6 font-serif">"{t.quote}"</p>
              <p className="font-bold text-accent-secondary">- {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
