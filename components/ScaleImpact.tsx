'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Counter({ value, label, sub }: { value: string; label: string; sub: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-amber-500/40 transition-colors duration-500">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{sub}</div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl sm:text-5xl font-black text-white mt-3"
      >
        {value}
      </motion.div>
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-2">{label}</div>
    </div>
  );
}

export default function ScaleImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transform bindings
  const yHeroCard = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.4, 1, 1, 0.5]);

  return (
    <section
      id="scale"
      ref={containerRef}
      className="relative py-32 bg-slate-950 border-b border-slate-900 overflow-hidden"
    >
      {/* Scroll-Reactive Ambient Spotlight */}
      <motion.div
        style={{
          opacity: opacityText,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-transparent blur-[160px] pointer-events-none rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Operational Benchmarks
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white mt-3 tracking-tight">
            Experience That Speaks in Numbers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 font-normal leading-relaxed">
            Deployment scale, continuous sequence monitoring, and floor accountability across primary and secondary steel units.
          </p>
        </motion.div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Parallax Display Card */}
          <motion.div
            style={{ y: yHeroCard }}
            className="lg:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-xl group hover:border-amber-500/50 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                Footprint & Capacity
              </div>
              <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white mt-6 tracking-tighter">
                2000 <span className="text-amber-500 text-3xl sm:text-5xl font-light">Million MT</span>
              </div>
              <div className="text-base font-bold uppercase tracking-wider text-slate-200 mt-2">
                Production Capacity Supported
              </div>
            </div>

            <p className="text-slate-400 text-sm mt-10 leading-relaxed max-w-md">
              Handling full-spectrum crucible charges, deoxidation chemistry, multi-strand spray cooling zones, and high-speed rolling sequences.
            </p>
          </motion.div>

          {/* Right Column Metric Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <Counter
              value="500 TPD"
              label="Throughput Capacity Supported"
              sub="Operational Run-Rate"
            />
            <Counter
              value="1M+ Hours"
              label="Industrial Man-Hours Delivered"
              sub="Statutory-Compliant Workforce"
            />
            <Counter
              value="60+ Plants"
              label="Facilities Served Across India"
              sub="Geographic Footprint"
            />
          </div>

        </div>

      </div>
    </section>
  );
}