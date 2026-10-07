"use client";

import { motion } from 'framer-motion';
import ContactHero from '@/components/contact/contact-hero';
import ActivityTicker from '@/components/contact/activity-ticker';
import ContactMethods from '@/components/contact/contact-methods';
import ContactForm from '@/components/contact/contact-form';
import TrustCards from '@/components/contact/trust-cards';
import ContactFAQ from '@/components/contact/contact-faq';
import { ScrollProgressBar } from '@/components/shared/ScrollProgressBar';

export default function ContactPageClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-text"
    >
      <ScrollProgressBar />

      <ContactHero />
      <ActivityTicker />

      <section className="py-20 px-8 bg-bg/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactMethods />
          <ContactForm />
        </div>
      </section>

      <TrustCards />
      <ContactFAQ />
    </motion.div>
  );
}
