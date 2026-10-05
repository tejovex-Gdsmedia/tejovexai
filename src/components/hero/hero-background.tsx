"use client";

import { useReducedMotion } from 'framer-motion';
import { Particles } from '../ui/particles';

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
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            >
                <source src="/assets/Tejovex_AI_25s.mp4" type="video/mp4" />
            </video>
            <Particles />
            {/* Cinematic overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
        </div>
    );
};
