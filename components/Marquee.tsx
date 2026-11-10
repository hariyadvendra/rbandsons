'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  'Induction Melting (10T–30T)',
  'Continuous Casting (CCM)',
  'TMT & Structural Rolling',
  'Ladle & Tundish Management',
  '100% Statutory Compliance',
  'Turnaround Shutdown Teams',
  'Burning Loss Minimization',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900/40 border-y border-slate-800/80 py-5 backdrop-blur-md">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}