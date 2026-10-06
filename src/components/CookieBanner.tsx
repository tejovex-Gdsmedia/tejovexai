"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    try {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        setIsVisible(true);
      }
    } catch (error) {
      // localStorage might be disabled
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookieConsent', 'accepted');
      setIsVisible(false);
    } catch (error) {
      // localStorage might be disabled, just close the banner
      setIsVisible(false);
    }
  };

  const handleReject = () => {
    try {
      localStorage.setItem('cookieConsent', 'rejected');
      setIsVisible(false);
    } catch (error) {
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-accent-secondary text-white p-4 md:p-6 border-t border-accent/20"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold mb-2">We Use Cookies</h3>
              <p className="text-sm text-white/90">
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. By clicking "Accept," you consent to our use of cookies.{' '}
                <a href="/privacy-policy" className="underline hover:text-white transition-colors">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 rounded-full bg-accent text-accent-secondary hover:bg-white transition-colors text-sm font-bold whitespace-nowrap"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
