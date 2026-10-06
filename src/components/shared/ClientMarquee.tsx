"use client";

import { motion, useInView } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Facematic", logo: "/facematicglobal-logo.png" },
  { name: "Brijesh Dube", logo: "/BrijeshDube-logo.png" },
  { name: "Dr. Sumita Agrawal", logo: "/Medisist-logo.png" },
  { name: "Vision Enterprises", logo: "/vision-logo.png" },
  { name: "Deepak Singhania", logo: "/facematicglobal-logo.png" },
  { name: "The Watch Store", logo: "/TWS-logo.png" },
  { name: "TP Hair Studio", logo: "/TP-logo.png" },
];

const LogoItem = ({ name, logo }: Company) => (
  <div
    className="flex items-center justify-center flex-shrink-0"
    style={{
      contain: 'layout style paint',
    }}
  >
    <Image
      src={logo}
      alt={name}
      height={120}
      width={120}
      className="h-16 md:h-20 lg:h-24 w-auto"
      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
      quality={100}
      priority={false}
      loading="lazy"
      style={{
        display: 'block',
        height: 'auto',
        maxHeight: '100%',
      }}
    />
  </div>
);

export const ClientMarquee = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-12 md:py-16 w-full box-border"
    >
      {/* Section Label */}
      <div className="text-center mb-8 md:mb-10">
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          OUR CLIENTS
        </p>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes logoMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .logo-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }

        .logo-track {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-backface-visibility: hidden;
          animation: logoMarquee 45s linear infinite;
        }

        .logo-group {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 35px;
          padding-right: 35px;
        }

        @media (min-width: 768px) {
          .logo-group {
            gap: 60px;
            padding-right: 60px;
          }
          .logo-track {
            animation: logoMarquee 50s linear infinite;
          }
        }

        @media (min-width: 1024px) {
          .logo-group {
            gap: 80px;
            padding-right: 80px;
          }
          .logo-track {
            animation: logoMarquee 55s linear infinite;
          }
        }

        .logo-marquee:hover .logo-track {
          animation-play-state: paused;
        }

        .logo-marquee img {
          display: block !important;
          width: auto !important;
          height: auto !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain !important;
          flex-shrink: 0 !important;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>

      {/* Marquee Container */}
      <div
        className="logo-marquee"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="logo-track">
          {/* First Logo Group */}
          <div className="logo-group">
            {companies.map((company: Company, i: number) => (
              <LogoItem key={`group1-${i}`} name={company.name} logo={company.logo} />
            ))}
          </div>

          {/* Duplicate Logo Group for Seamless Loop */}
          <div className="logo-group" aria-hidden="true">
            {companies.map((company: Company, i: number) => (
              <LogoItem key={`group2-${i}`} name={company.name} logo={company.logo} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
