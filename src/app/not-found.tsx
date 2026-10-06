"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="bg-bg text-text min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[150px] font-bold tracking-tighter bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Page Not Found
          </h2>
          <p className="text-text-muted text-lg md:text-xl mb-2">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <p className="text-text-muted text-lg mb-8">
            The URL might be incorrect or the page may have been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.push('/')}
            className="px-8 py-4 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-transform text-lg"
          >
            Go Home
          </button>
          <button
            onClick={() => router.push('/contact#contact-form')}
            className="px-8 py-4 border border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-colors text-lg"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-accent/20"
        >
          <p className="text-text-muted text-sm">
            Need help? <a href="/contact" className="text-accent hover:underline font-semibold">Contact our team</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
