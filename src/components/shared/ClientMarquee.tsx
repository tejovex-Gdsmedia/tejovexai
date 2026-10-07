"use client";

import { motion, useInView } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface Company {
  name: string;
  logo: string;
}

const clients: Company[] = [
  { name: "Facematic Global", logo: "/facematicglobal-logo.png" },
  { name: "Facematic Aesthetic", logo: "/Facematicasthetic-logo.png" },
  { name: "Brijesh Dube", logo: "/BrijeshDube-logo.png" },
  { name: "Medisist", logo: "/Medisist-logo.png" },
  { name: "Vision Enterprises", logo: "/vision-logo.png" },
  { name: "The Watch Store", logo: "/TWS-logo.png" },
  { name: "TP Hair Studio", logo: "/TP-logo.png" },
];

const LogoCard = ({ name, logo }: Company) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center justify-center flex-shrink-0"
    style={{
      backgroundColor: '#ffffff',
      border: '1px solid #efefef',
      borderRadius: '12px',
      padding: '14px 28px',
      height: '70px',
      minWidth: '140px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    }}
  >
    <Image
      src={logo}
      alt={name}
      height={36}
      width={120}
      className="logo-image"
      style={{
        height: 'auto',
        width: 'auto',
        maxWidth: '120px',
        objectFit: 'contain',
        filter: 'grayscale(100%)',
        opacity: 0.7,
        transition: 'all 0.3s ease',
      }}
    />
  </motion.div>
);

export const ClientMarquee = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px 0px -50px 0px" // Trigger animation earlier
  });

  // Duplicate array for seamless loop
  const doubled = [...clients, ...clients];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="py-16 md:py-20 w-full box-border relative z-10"
    >
      {/* Label */}
      <div className="text-center mb-8">
        <p
          className="text-xs uppercase tracking-widest"
          style={{
            color: "#999",
            marginBottom: "24px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: "11px"
          }}
        >
          TRUSTED BY
        </p>
      </div>

      {/* Marquee Container */}
      <div
        className="logo-marquee"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track">
          {/* First Logo Group */}
          {clients.map((client: Company, i: number) => (
            <div key={`group1-${i}`} className="client-pill">
              <Image
                src={client.logo}
                alt={client.name}
                height={20}
                width={80}
                style={{
                  height: 'auto',
                  width: '80px',
                  objectFit: 'contain',
                }}
              />
              <span className="text-xs font-medium" style={{ color: '#666' }}>{client.name}</span>
            </div>
          ))}

          {/* Duplicate Logo Group for Seamless Loop */}
          {doubled.slice(clients.length).map((client: Company, i: number) => (
            <div key={`group2-${i}`} className="client-pill">
              <Image
                src={client.logo}
                alt={client.name}
                height={20}
                width={80}
                style={{
                  height: 'auto',
                  width: '80px',
                  objectFit: 'contain',
                }}
              />
              <span className="text-xs font-medium" style={{ color: '#666' }}>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
