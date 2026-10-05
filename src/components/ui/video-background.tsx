"use client";

import React from 'react';

export const VideoBackground = ({ children, videoSrc, className }: { children: React.ReactNode, videoSrc: string, className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-bg/50 z-10" />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};
