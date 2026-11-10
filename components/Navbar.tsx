'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Leadership', href: '#leadership' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo / Brand */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group outline-none"
          >
            <div className="relative w-16 h-12 flex items-center justify-center">
              <Image
                src="/assets/images/rbslogo.jpeg"
                alt="RB & Sons Logo"
                width={80}
                height={50}
                priority
                className="object-contain mix-blend-screen contrast-125 brightness-110 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="tracking-wider text-sm font-extrabold text-white uppercase group-hover:text-amber-400 transition-colors">
                RB & SONS CO.
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-medium -mt-0.5">
                Steel Melting & Industrial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative py-1 focus:outline-none ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 to-amber-500 animate-pulse rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Talk to Us Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group px-5 py-2.5 rounded-md border border-amber-500/40 bg-slate-900/90 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              <span className="flex items-center gap-2">
                Talk to Us
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4 animate-in fade-in">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block text-center w-full py-3 rounded-md bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider mt-4"
          >
            Talk to Us
          </a>
        </div>
      )}
    </header>
  );
}