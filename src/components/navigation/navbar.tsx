"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import SystemsDropdown from './systems-dropdown';

export const Navbar = () => {
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleStartProject = () => {
    router.push('/contact#contact-form');
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getLinkClass = (href: string) => {
    const isCurrentPage = isActive(href);
    return `transition-colors ${
      isCurrentPage ? 'text-accent font-semibold' : 'text-text hover:text-accent'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-6 backdrop-blur-md bg-bg/50 border-b border-surface w-full box-border">
      <Link href="/" className="text-xl font-bold tracking-tighter flex-shrink-0">
        <Image src="/image.png" alt="Tejovex AI" width={120} height={40} className="w-auto h-8" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link
          href="/"
          className={`${getLinkClass('/')} text-sm`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${getLinkClass('/about')} text-sm`}
        >
          About
        </Link>

        {/* Systems Dropdown Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsSystemsOpen(!isSystemsOpen)}
            className={`flex items-center gap-1.5 transition-colors group text-sm ${
              isActive('/systems') ? 'text-accent font-semibold' : 'text-text hover:text-accent'
            }`}
          >
            Systems
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isSystemsOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {/* Dropdown Panel */}
          <SystemsDropdown
            isOpen={isSystemsOpen}
            onClose={() => setIsSystemsOpen(false)}
          />
        </div>

        <Link
          href="/contact"
          className={`${getLinkClass('/contact')} text-sm`}
        >
          Contact
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <button
        onClick={handleStartProject}
        className="hidden md:block px-6 py-2 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-transform flex-shrink-0"
      >
        START A PROJECT
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 flex-shrink-0"
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-0.5 bg-text transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-text transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-text transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg border-b border-surface md:hidden">
          <div className="flex flex-col gap-4 p-6 w-full box-border">
            <Link
              href="/"
              className={`${getLinkClass('/')} text-sm py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${getLinkClass('/about')} text-sm py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/systems/prompt-architect"
              className={`${getLinkClass('/systems')} text-sm py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Systems
            </Link>
            <Link
              href="/contact"
              className={`${getLinkClass('/contact')} text-sm py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                handleStartProject();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-accent text-bg font-bold rounded-full hover:scale-105 transition-transform mt-2"
            >
              START A PROJECT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

