'use client';

import React, { useState } from 'react';
import { MapPin, Flame, Layers, Wrench, Building2, CheckCircle2 } from 'lucide-react';

interface PlantProject {
  company: string;
  location: string;
  state: 'West Bengal' | 'Odisha' | 'Jharkhand' | 'Chhattisgarh';
  furnaces: string;
  ccmSetup: string;
  scope: string[];
}

const CURRENT_OPERATIONS: PlantProject[] = [
  {
    company: 'Shyam Sel & Power Ltd',
    location: 'Jamuria, Asansol',
    state: 'West Bengal',
    furnaces: '5 Furnaces x 22.5 MT',
    ccmSetup: '2 Double-Strand CCMs',
    scope: ['SMS Contracting', 'Continuous Billet Casting', 'Shift Supervision'],
  },
  {
    company: 'Rashmi Metaliks Ltd',
    location: 'Jhargram',
    state: 'West Bengal',
    furnaces: '6 Furnaces x 22.5 MT',
    ccmSetup: 'Multi-Strand CCM Operations',
    scope: ['SMS Contracting', 'CCM Floor Operations', 'Mechanical Maintenance'],
  },
  {
    company: 'Shyam Metalics & Energy Ltd',
    location: 'Sambalpur',
    state: 'Odisha',
    furnaces: '4 Furnaces x 22.5 MT',
    ccmSetup: '3 Double-Strand CCMs',
    scope: ['SMS Execution', 'Ladle Management', 'Casting Operations'],
  },
  {
    company: 'Godawari Power & Ispat Ltd (GPIL)',
    location: 'Raipur',
    state: 'Chhattisgarh',
    furnaces: '4 Furnaces x 15 MT',
    ccmSetup: '3 Double-Strand CCMs',
    scope: ['SMS Contracting', 'CCM Operations', 'Furnace Turnaround'],
  },
  {
    company: 'Maithan Steel & Power Ltd',
    location: 'Salanpur',
    state: 'West Bengal',
    furnaces: '4 Furnaces x 15 MT',
    ccmSetup: 'Integrated Casting Line',
    scope: ['SMS Operations', 'Crucible Management', 'Manpower Deployment'],
  },
  {
    company: 'Nilachal Ispat & Power Ltd',
    location: 'Jamshedpur',
    state: 'Jharkhand',
    furnaces: '5 Furnaces x 15 MT',
    ccmSetup: 'High-Throughput Casting',
    scope: ['SMS Floor Contracting', 'Heat Cycle Operations'],
  },
  {
    company: 'Singhal Steel Pvt Ltd',
    location: 'Raigarh',
    state: 'Chhattisgarh',
    furnaces: '3 Furnaces x 15 MT',
    ccmSetup: 'Double-Strand CCM',
    scope: ['SMS Contracting', 'CCM Operations'],
  },
  {
    company: 'Vraj Metaliks / Vraj Ispat Ltd',
    location: 'Bilaspur & Raipur',
    state: 'Chhattisgarh',
    furnaces: '2x 15 MT & 2x 12 MT',
    ccmSetup: 'Double & Single Strand CCMs',
    scope: ['Furnace & CCM Erection', 'Maintenance Support', 'SMS Contracting'],
  },
  {
    company: 'Gopal Sponge Pvt Ltd',
    location: 'Raipur',
    state: 'Chhattisgarh',
    furnaces: '2 Furnaces (Ingot Casting)',
    ccmSetup: 'Ingot Pouring Setup',
    scope: ['Ingot Casting Operations', 'Plant Maintenance'],
  },
];

const CLIENT_NAMES = [
  'SHYAM SEL & POWER LTD',
  'RASHMI METALIKS LTD',
  'SHYAM METALICS & ENERGY LTD',
  'GODAWARI POWER & ISPAT LTD',
  'MAITHAN STEEL & POWER LTD',
  'NILACHAL ISPAT & POWER LTD',
  'SINGHAL STEEL PVT LTD',
  'VRAJ ISPAT LTD',
];

export default function Projects() {
  const [selectedState, setSelectedState] = useState<string>('All');

  const states = ['All', 'Chhattisgarh', 'West Bengal', 'Odisha', 'Jharkhand'];

  const filteredProjects =
    selectedState === 'All'
      ? CURRENT_OPERATIONS
      : CURRENT_OPERATIONS.filter((p) => p.state === selectedState);

  return (
    <section id="projects" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Proven Execution & Live Sites
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white mt-2 tracking-tight">
              Our Experience Across Steel Plants
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
              Active operational mandates spanning 12 MT to 22.5 MT induction furnace setups, multi-strand continuous casting machines, and turnaround maintenance.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedState === state
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* Live Client Name Ticker */}
        <div className="mb-12 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
            {[...CLIENT_NAMES, ...CLIENT_NAMES].map((client, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Plant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((plant, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Location Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-500 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{plant.location}, {plant.state}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                    Live Operational Unit
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {plant.company}
                </h3>

                {/* Furnace & CCM Specs */}
                <div className="mt-5 space-y-2.5 bg-slate-950/70 p-4 rounded-xl border border-slate-800/70">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Flame className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="font-semibold">{plant.furnaces}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Layers className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{plant.ccmSetup}</span>
                  </div>
                </div>
              </div>

              {/* Execution Scope Tags */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Operating Scope:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {plant.scope.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}