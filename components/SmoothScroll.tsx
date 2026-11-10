'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-amber-500 to-amber-300 origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />
      {children}
    </>
  );
}