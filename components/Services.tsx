'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Users, Cpu, Wrench, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Flame,
    title: 'Steel Melting Shop Contracting',
    subtitle: 'Full-Spectrum Floor Operations',
    description:
      'Complete operational execution for SMS units. Heat cycle scheduling, crucible preparation, scrap charging, deoxidation, and CCM/ingot casting execution.',
    points: ['Induction Furnaces (10T-30T)', 'Ladle Management & Relining', 'Multi-Strand CCM Casting'],
  },
  {
    icon: Users,
    title: 'Skilled Manpower Solutions',
    subtitle: 'Technical Workforce Deputation',
    description:
      'Deployment of certified furnace masters, casting technicians, rolling mill fitters, and skilled crew on fixed or production-linked deployment models.',
    points: ['100% Statutory Compliance (ESIC/EPFO)', 'Site-Ready Safety Training', 'Rapid Turnaround Teams'],
  },
  {
    icon: Cpu,
    title: 'Technical Consultation',
    subtitle: 'Process & Yield Optimization',
    description:
      'Engineering consultancy to reduce power consumption per metric tonne, resolve refractory failure issues, and optimize thermal cycles.',
    points: ['Burning Loss Reduction', 'Refractory Life Enhancement', 'Standardized Metallurgical SOPs'],
  },
  {
    icon: Wrench,
    title: 'Plant Operations Support',
    subtitle: 'Overhauls & Maintenance',
    description:
      'End-to-end shutdown support, emergency furnace relining, CCM strand realignment, and roll-pass adjustment services for continuous uptime.',
    points: ['Scheduled Turnaround Execution', 'Cold/Hot Mechanical Maintenance', 'Emergency Repair Dispatch'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Specialized Divisions
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-3 tracking-tight">
              Our Core Services
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal">
            Modular industrial contracting, engineering consultation, and workforce deployment configured to your plant requirements.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                className="group relative bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-10 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Molten Glow Accent on Card Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500 transition-all duration-700" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-amber-500 group-hover:border-amber-500/40 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {service.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1.5 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Execution Highlights:
                  </div>
                  <ul className="space-y-2">
                    {service.points.map((pt, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}