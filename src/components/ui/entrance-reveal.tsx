"use client";
import { motion } from "framer-motion";
import { transition } from "@/lib/motion";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

export const EntranceReveal = ({ children }: { children: React.ReactNode }) => {
  // Default to showing the splash so it's visible on the very first paint
  // instead of flashing the page content before the splash mounts.
  const [shouldShow, setShouldShow] = useState(true);

  useLayoutEffect(() => {
    // Check session storage to see if the user has already visited in this session.
    // useLayoutEffect runs before the browser paints, so if they've already
    // visited we skip the splash without it ever flashing on screen.
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setShouldShow(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  if (!shouldShow) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#080D24]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          initial={{ x: "-10vw", opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            ...transition,
            duration: 1.5,
          }}
          className="relative"
        >
          <Image
            src="/logo123.png"
            alt="Tejovex AI Logo"
            width={500}
            height={500}
            className="w-[clamp(220px,30vw,500px)] h-auto"
            priority
          />
        </motion.div>
      </motion.div>
      {children}
    </div>
  );
};
