"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SystemsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SystemsDropdown({ isOpen, onClose }: SystemsDropdownProps) {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handlePromptArchitectClick = () => {
    router.push('/systems/prompt-architect');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
          style={{
            minWidth: '320px',
            maxWidth: '380px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            onClick={handlePromptArchitectClick}
            className="p-5 rounded-2xl cursor-pointer transition-all duration-300 relative"
            style={{
              backgroundColor: '#0f0f0f',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Live Now Badge */}
            <div
              className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: 'rgba(74,222,128,0.15)',
                color: '#4ade80',
              }}
            >
              Live Now
            </div>

            {/* Icon */}
            <div className="text-3xl mb-3" style={{ color: '#f0c8a0' }}>
              ⚙️
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white mb-1">
              Prompt Architect
            </h3>

            {/* Description */}
            <p className="text-xs text-white/50 mb-4">
              Build and refine AI prompts for your business
            </p>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-3"></div>

            {/* Explore Link */}
            <div className="text-xs font-semibold" style={{ color: '#f0c8a0' }}>
              Explore →
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
