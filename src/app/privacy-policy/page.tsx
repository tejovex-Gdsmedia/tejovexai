"use client";

import { motion } from 'framer-motion';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-muted text-lg">
            Last updated: October 6, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-invert max-w-none space-y-8"
        >
          {/* Data Collection */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">1. Data Collection</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Tejovex AI collects information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Name, email address, and phone number</li>
              <li>Company information and industry details</li>
              <li>Project requirements and automation preferences</li>
              <li>Communication history and correspondence</li>
              <li>Payment and billing information</li>
            </ul>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">2. Cookies & Tracking</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Understand how you use our website</li>
              <li>Improve site functionality and performance</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze traffic and user behavior</li>
              <li>Personalize your experience</li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">3. Third Party Services</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We use third-party services to support our operations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Email service providers for communications</li>
              <li>Payment processors for transactions</li>
              <li>Cloud hosting providers for data storage</li>
              <li>CRM platforms for client relationship management</li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-4">
              These services have their own privacy policies. We are not responsible for their privacy practices.
            </p>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">4. How We Use Your Data</h2>
            <p className="text-text-muted leading-relaxed">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Process transactions and payments</li>
              <li>Comply with legal obligations</li>
              <li>Analyze and optimize our website</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">5. Data Security</h2>
            <p className="text-text-muted leading-relaxed">
              We implement industry-standard security measures to protect your information, including SSL encryption, secure servers, and restricted access controls. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">6. Your Rights</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">7. Contact Information</h2>
            <p className="text-text-muted leading-relaxed">
              For privacy-related inquiries, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-text font-semibold">Tejovex AI</p>
              <p className="text-text-muted">Email: privacy@tejovex.ai</p>
              <p className="text-text-muted">Phone: +91 (available during business hours)</p>
              <p className="text-text-muted">Address: 106 The Platina, Tanvi Complex, Swami Vivekanand Rd, Gaurav Tal Patriwala Industrial Area, Dahisar East, Mumbai, Maharashtra 400068, India</p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">8. Policy Updates</h2>
            <p className="text-text-muted leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
