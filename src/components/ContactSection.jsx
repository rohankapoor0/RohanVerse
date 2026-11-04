import React, { useState } from 'react';
import PlanetSphere from './PlanetSphere';
import { personalInfo } from '../data';

/**
 * Section: Contact / Mercury (Silver & Champagne Gold)
 * Continuous scroll integration with luminous KPI cards.
 */
export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const accent = "#e2e8f0"; // Mercury silver

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 relative z-10">
      
      {/* Section Header */}
      <div className="space-y-4 border-b border-amber-400/30 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest-plus uppercase text-amber-300">
          <PlanetSphere planetName="Mercury" accent={accent} size={16} />
          <span>SECTOR 06 // MERCURY · DIRECT TELEMETRY FREQUENCY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          Establish Contact
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          Open to enterprise AI agent architecture, production ML deployments, and high-performance engineering collaborations.
        </p>
      </div>

      {/* Main Observatory Contact Card with luminous gold borders */}
      <div className="kpi-card p-8 sm:p-12 rounded-3xl relative overflow-hidden space-y-10">
        
        {/* Luminous Top Gold Arc */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
              TRANSMISSION TARGET
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </div>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Based in Mumbai, India. Operating across global distributed timezones.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>FREQUENCY MONITORED DAILY</span>
            </div>
          </div>

          <div className="space-y-5 sm:border-l sm:border-amber-400/20 sm:pl-8">
            <div>
              <div className="text-[10px] font-mono text-amber-300 uppercase font-semibold">OFFICIAL EMAIL</div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-mono text-white mt-1 break-all font-semibold hover:text-amber-300 transition-colors block"
              >
                {personalInfo.email}
              </a>
            </div>

            <div>
              <div className="text-[10px] font-mono text-amber-300 uppercase font-semibold">LINKEDIN NETWORK</div>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-mono text-neutral-200 mt-1 font-semibold hover:text-amber-300 transition-colors flex items-center gap-2"
              >
                <span>linkedin.com/in/rohankapoor2460</span>
                <span className="text-xs text-amber-400 font-normal">↗</span>
              </a>
            </div>

            <div>
              <div className="text-[10px] font-mono text-amber-300 uppercase font-semibold">INSTITUTION & CGPA</div>
              <div className="text-sm font-mono text-neutral-300 mt-1">
                {personalInfo.institution} · <span className="text-amber-300 font-bold">{personalInfo.cgpa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-8 border-t border-amber-400/20 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-white via-amber-100 to-amber-300 text-black text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
          >
            Transmit Direct Email →
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono tracking-wider uppercase border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all duration-300"
          >
            {copied ? '✓ Email Copied' : 'Copy Email Address'}
          </button>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono tracking-wider uppercase border border-white/20 hover:border-amber-400/40 transition-all duration-300 flex items-center gap-2"
          >
            <span>LinkedIn Profile</span>
            <span className="text-amber-300">↗</span>
          </a>
        </div>

      </div>

      {/* Footer Attribution */}
      <div className="pt-12 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4">
        <div>
          ROHANVERSE // OBSERVATORY LOGS · 2026
        </div>
        <div className="flex items-center gap-6">
          <span>EVENT HORIZON: STABLE</span>
          <span>BLACK HOLE ACCRETION: INTENSE</span>
          <span className="text-amber-300 font-semibold">PURE BLACK (#000000)</span>
        </div>
      </div>

    </section>
  );
}
