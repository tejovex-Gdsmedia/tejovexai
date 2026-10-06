"use client";

import { motion } from 'framer-motion';
import React from 'react';

export default function Terms() {
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
            Terms & Conditions
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
          {/* Acceptance */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">1. Acceptance of Terms</h2>
            <p className="text-text-muted leading-relaxed">
              By accessing and using the Tejovex AI website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">2. Use License</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Tejovex AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Use of Services */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">3. Use of Services</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Tejovex AI provides AI automation and business intelligence services. By engaging our services, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Provide accurate and complete information during the consultation process</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the functionality of our systems</li>
              <li>Respect the intellectual property rights of Tejovex AI and our partners</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">4. Intellectual Property Rights</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              All content on the Tejovex AI website and our services, including text, graphics, logos, images, and software, is the property of Tejovex AI or its content suppliers and is protected by international copyright laws.
            </p>
            <p className="text-text-muted leading-relaxed">
              The custom AI agents, automation workflows, and solutions developed for you are your property upon full payment. We retain rights to our underlying technology and frameworks.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">5. Limitation of Liability</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, TEJOVEX AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Any third-party content or services</li>
              <li>Business interruption or lost profits</li>
              <li>Any other matter beyond our reasonable control</li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-4">
              Our total liability shall not exceed the amount paid by you for services in the past 12 months.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">6. Payment Terms</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Payment for our services is due as specified in your service agreement. We accept various payment methods. By providing payment information, you authorize us to charge your account.
            </p>
            <p className="text-text-muted leading-relaxed">
              Late payments may result in suspension of services. All fees are exclusive of applicable taxes unless otherwise stated.
            </p>
          </section>

          {/* Service Level Agreement */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">7. Service Level Agreement</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We commit to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Responding to inquiries within 5 minutes on WhatsApp during business hours</li>
              <li>Responding to email inquiries within 24 hours</li>
              <li>Delivering solutions within the agreed timeline (typically 8-10 weeks)</li>
              <li>Maintaining 99.5% uptime for deployed AI agents</li>
              <li>Providing 24/7 monitoring and support for production systems</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">8. Termination</h2>
            <p className="text-text-muted leading-relaxed">
              Either party may terminate the service agreement with 30 days' written notice. Upon termination, you remain responsible for all charges incurred through the termination date. We will provide you with your data in an accessible format upon request.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">9. Indemnification</h2>
            <p className="text-text-muted leading-relaxed">
              You agree to indemnify and hold harmless Tejovex AI from any claims, damages, or costs (including attorney fees) arising from your use of our services, your violation of these terms, or your infringement of any intellectual property rights.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">10. Governing Law</h2>
            <p className="text-text-muted leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">11. Contact Information</h2>
            <p className="text-text-muted leading-relaxed">
              For questions about these terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-text font-semibold">Tejovex AI</p>
              <p className="text-text-muted">Email: legal@tejovex.ai</p>
              <p className="text-text-muted">Phone: +91 (available during business hours)</p>
              <p className="text-text-muted">Address: 106 The Platina, Tanvi Complex, Swami Vivekanand Rd, Gaurav Tal Patriwala Industrial Area, Dahisar East, Mumbai, Maharashtra 400068, India</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
