"use client";

import { useRef, useEffect } from 'react';
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

  const handleQuotationMakerClick = () => {
    router.push('/systems/ai-quotation-maker');
    onClose();
  };

  const systems = [
    {
      icon: '⚙️',
      title: 'Prompt Architect',
      description: 'Build and refine AI prompts for your business',
      onClick: handlePromptArchitectClick,
    },
    {
      icon: '🧾',
      title: 'AI Quotation Maker',
      description: 'Generate instant, professional quotations with AI',
      onClick: handleQuotationMakerClick,
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 rounded-2xl overflow-hidden border border-text/10
        origin-top transition-all duration-200 ease-out
        ${isOpen ? 'visible opacity-100 translate-y-0 scale-100' : 'invisible opacity-0 -translate-y-1 scale-95'}
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100`}
      style={{
        width: '460px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
      }}
    >
      {/* Two-column mega-menu grid */}
      <div className="grid grid-cols-2 bg-surface">
        {systems.map((system, i) => (
          <button
            key={system.title}
            type="button"
            onClick={system.onClick}
            className={`flex flex-col items-start gap-2 p-4 text-left cursor-pointer transition-colors hover:bg-accent/5 focus:bg-accent/5 outline-none ${
              i > 0 ? 'border-l border-text/10' : ''
            }`}
          >
            {/* Icon square with live indicator badge */}
            <div className="relative">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-accent/10">
                {system.icon}
              </div>
              <span
                className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ring-2 ring-surface bg-green-500"
                title="Live Now"
              />
            </div>

            {/* Title + subtitle */}
            <div className="min-w-0 w-full">
              <h3
                className="text-sm font-semibold text-text leading-snug"
                style={{ fontFamily: 'var(--font-body)', letterSpacing: 'normal' }}
              >
                {system.title}
              </h3>
              <p className="text-xs text-text-muted">
                {system.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
