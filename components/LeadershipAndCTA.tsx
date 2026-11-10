'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, FileCheck, Send, CheckCircle2, Quote } from 'lucide-react';

export default function LeadershipAndCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    plant: '',
    phone: '',
    service: 'Steel Melting Shop (SMS) Contracting',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Accountability & Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white mt-2 tracking-tight">
              The People Behind Our Expertise
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Experienced leadership with hands-on technical management across induction furnaces, casting, and rolling mills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Founder & Director: R. B. Yadav */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center space-x-5 mb-6">
                  {/* Portrait Image Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-700/80 group-hover:border-amber-500/60 transition-colors flex-shrink-0 bg-slate-800 shadow-md">
                    <Image
                      src="/assets/images/teams/rbyadav.jpeg"
                      alt="Mr. R. B. Yadav - Founder & Director"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      Mr. R. B. Yadav
                    </h3>
                    <div className="text-amber-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
                      Founder & Director
                    </div>
                    <div className="text-slate-400 text-[11px] font-medium mt-0.5">
                      SMS Operations & Metallurgy
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 mb-5 relative">
                  <Quote className="w-4 h-4 text-amber-500/40 mb-1.5" />
                  <p className="text-slate-300 italic text-xs leading-relaxed">
                    “Long-term partnerships in steel manufacturing are built on one foundation: on-the-ground operational discipline and absolute accountability.”
                  </p>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Decades of metallurgical and shop floor experience supervising induction melting units, furnace turnarounds, and statutory workforce management across major steel manufacturing clusters.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Executive Board</span>
                <span className="text-slate-400 font-medium">Founding Leadership</span>
              </div>
            </div>

            {/* Managing Director: Satyendra Yadav */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center space-x-5 mb-6">
                  {/* Portrait Image Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-700/80 group-hover:border-amber-500/60 transition-colors flex-shrink-0 bg-slate-800 shadow-md">
                    <Image
                      src="/assets/images/teams/satyendra.jpeg"
                      alt="Mr. Satyendra Yadav - Managing Director"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      Mr. Satyendra Yadav
                    </h3>
                    <div className="text-amber-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
                      Managing Director
                    </div>
                    <div className="text-slate-400 text-[11px] font-medium mt-0.5">
                      Plant Operations & Execution
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 mb-5 relative">
                  <Quote className="w-4 h-4 text-amber-500/40 mb-1.5" />
                  <p className="text-slate-300 italic text-xs leading-relaxed">
                    “Our goal is to bring practical steel plant expertise, skilled manpower, and dependable execution to every project we undertake.”
                  </p>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Leads technical project execution, multi-strand CCM casting setups, and large-scale industrial crew deployments across primary and secondary steel units.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Executive Board</span>
                <span className="text-slate-400 font-medium">Operations Leadership</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Contact Us / Talk To Us Section */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white mt-2 tracking-tight">
              Talk to Our Operations Desk
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              Connect directly with our commercial and operations team for plant contracting, workforce supply, or technical consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Direct Official Contact Cards */}
            <div className="lg:col-span-5 space-y-4">

              {/* Phone Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-amber-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-amber-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Calling Lines</div>
                    <div className="mt-1 space-y-1">
                      <a href="tel:9981170833" className="block text-base font-bold text-white hover:text-amber-400 transition">
                        +91 99811-70833
                      </a>
                      <a href="tel:7389517101" className="block text-base font-bold text-white hover:text-amber-400 transition">
                        +91 73895-17101
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-amber-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-amber-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Official Inquiries & RFPs</div>
                    <a href="mailto:rbyadav7101@gmail.com" className="block text-base font-bold text-white hover:text-amber-400 transition mt-1">
                      rbyadav7101@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Registered Address */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-amber-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-amber-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Registered Office</div>
                    <p className="text-sm font-medium text-slate-200 mt-1 leading-relaxed">
                      Near Lalmati Hospital, MIG(S) 306, Kabir Nagar,<br />
                      Raipur, Chhattisgarh – 492099
                    </p>
                  </div>
                </div>
              </div>

              {/* Statutory Credentials Strip */}
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
                  <FileCheck className="w-4 h-4" />
                  <span>Statutory Registration</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">GSTIN NO:</span>
                    <span className="text-slate-200 font-mono font-semibold">22AEDPY3811Q2Z3</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">PAN NO:</span>
                    <span className="text-slate-200 font-mono font-semibold">AEDPY3811Q</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RFP Lead Submission Form */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-amber-500 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Proposal Request Received</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you. The RB & Sons operations desk will review your requirements and reach out to your team shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full bg-slate-900 border border-slate-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Plant / Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Ispat Pvt Ltd"
                        className="w-full bg-slate-900 border border-slate-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        value={formData.plant}
                        onChange={(e) => setFormData({ ...formData, plant: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Direct Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-900 border border-slate-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Service Required
                      </label>
                      <select
                        className="w-full bg-slate-900 border border-slate-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>Steel Melting Shop (SMS) Contracting</option>
                        <option>Skilled Technical Manpower Supply</option>
                        <option>Process & Yield Technical Consultation</option>
                        <option>Furnace Relining & Turnaround Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Operational Requirements / Remarks
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief details about your furnace capacity, casting setup, or required workforce scale..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-md bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Operational RFP
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Corporate Legal Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} RB & Sons Co. All Rights Reserved. Turnkey SMS Operations & Industrial Services.
          </div>
          <div className="flex items-center gap-6">
            <span>GSTIN: 22AEDPY3811Q2Z3</span>
            <span>PAN: AEDPY3811Q</span>
          </div>
        </div>
      </footer>
    </>
  );
}