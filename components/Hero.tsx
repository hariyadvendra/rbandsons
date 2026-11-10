'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Direct DOM mutations to bypass browser autoplay restrictions
      video.defaultMuted = true;
      video.muted = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silent fallback if low-power mode or browser policy delays playback
        });
      }
    }
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between bg-slate-950 pt-32 pb-10 overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Optical Contrast Filters */}
        <div className="absolute inset-0 bg-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Ambient Molten Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-b from-orange-600/20 via-amber-500/10 to-transparent blur-[140px] pointer-events-none rounded-full z-0" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        {/* Capability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-widest text-slate-200 uppercase">
            Specialists in Steel Melting Shop Operations & Industrial Services
          </span>
        </div>

        {/* Balanced Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.12] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Engineering Performance. <br />
          Powering{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Steel.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          Specialized steel melting shop contracting, technical consultation, and skilled industrial manpower solutions engineered for continuous, high-efficiency steel manufacturing facilities.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#services"
            onClick={(e) => handleScrollTo(e, 'services')}
            className="group inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all"
          >
            Explore Our Services
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-slate-700/80 bg-slate-900/8