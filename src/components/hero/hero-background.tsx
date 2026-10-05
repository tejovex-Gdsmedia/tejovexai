"use client";

import { useReducedMotion } from 'framer-motion';

export const HeroBackground = () => {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return (
            <div className="absolute inset-0 z-0 bg-bg" />
        );
    }

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
                {/*
                  NOTE: Replace with your actual cinematic AI automation video asset.
                  Recommended: WebM format for best performance/quality ratio.
                */}
                <source src="/assets/hero-bg.webm" type="video/webm" />
                <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Cinematic overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
        </div>
    );
};
