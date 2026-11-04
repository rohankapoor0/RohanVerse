import React from 'react';
import PlanetSphere from './PlanetSphere';
import { personalInfo, scholasticProfile, trophies, certifications, skillsByCategory } from '../data';

/**
 * Section: About / Neptune (Violet & Champagne Gold accents)
 * Upgraded with luminous KPI borders and crisp outlines.
 */
export default function AboutSection() {
  const accent = "#a855f7"; // Neptune violet

  return (
    <section id="about" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-20 relative z-10">
      
      {/* Section Header */}
      <div className="space-y-4 border-b border-amber-400/30 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest-plus uppercase text-amber-300">
          <PlanetSphere planetName="Neptune" accent={accent} size={16} />
          <span>SECTOR 02 // NEPTUNE · PROFILE & SCHOLASTIC CORE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          Architectural Foundation
        </h2>
        <p className="max-w-3xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          {personalInfo.overview}
        </p>
      </div>

      {/* Honors & Trophies Row with crisp luminous gold outlines */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-300 font-semibold">
            HONORS & MILITARY GRADE ACADEMIC PODIUMS
          </span>
          <span className="text-[11px] font-mono text-purple-300">VERIFIED DISTINCTIONS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trophies.map((t) => (
            <div
              key={t.title}
              className="kpi-card p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-2 font-semibold">
                  {t.title}
                </div>
                <div className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  {t.award}
                </div>
                <p className="text-xs text-neutral-300 font-light mt-2.5 leading-relaxed">
                  {t.detail}
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-amber-400/20 flex items-center justify-between">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]"></span>
                <span className="text-[10px] font-mono text-amber-300/80 uppercase">AUTHENTICATED</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scholastic Profile & Degrees with crisp luminous boxes */}
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-300 font-semibold">
            SCHOLASTIC DEGREE BLUEPRINTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {scholasticProfile.map((s, idx) => (
            <div
              key={s.degree}
              className="kpi-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 uppercase mb-3">
                  <span className="font-semibold">{s.status}</span>
                  <span className="text-neutral-400">{s.duration}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 leading-snug">
                  {s.degree}
                </h3>
                <div className="text-xs font-mono text-neutral-300">
                  {s.institution}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-amber-400/20">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">SCORE / CGPA</div>
                <div className="text-2xl font-bold text-white font-mono mt-0.5 text-amber-100">
                  {s.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Arsenal & Capabilities with luminous border cards */}
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-300 font-semibold">
            SYSTEM CAPABILITIES & STACK ARSENAL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsByCategory.map((cat) => (
            <div
              key={cat.name}
              className="kpi-card p-6 rounded-2xl"
            >
              <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-4 pb-2 border-b border-amber-400/20 flex items-center justify-between font-semibold">
                <span>{cat.name}</span>
                <span className="text-neutral-400">[{cat.items.length}]</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-neutral-950 border border-amber-400/30 text-xs text-neutral-200 font-mono shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Certifications */}
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-300 font-semibold">
            INDUSTRY CERTIFICATION TELEMETRY
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="kpi-card p-4 rounded-xl text-left flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono text-amber-400 uppercase mb-2 font-semibold">
                {cert.issuer}
              </div>
              <div className="text-xs text-white font-medium leading-snug">
                {cert.name}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
