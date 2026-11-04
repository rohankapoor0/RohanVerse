import React from 'react';
import PlanetSphere from './PlanetSphere';
import { experiences } from '../data';

/**
 * Section: Experience / Saturn (Golden Amber)
 * Continuous scroll integration with luminous black hole gold KPI panels.
 */
export default function ExperienceSection() {
  const accent = "#f59e0b"; // Saturn golden amber

  return (
    <section id="experience" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 relative z-10">
      
      {/* Section Header */}
      <div className="space-y-4 border-b border-amber-400/30 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest-plus uppercase text-amber-300">
          <PlanetSphere planetName="Saturn" accent={accent} size={16} />
          <span>SECTOR 04 // SATURN · INDUSTRIAL BATTLEGROUNDS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          Production Deployments
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          High-impact engineering experience at enterprise scale: algorithmic financial modeling, automated enterprise agents, and developer tooling.
        </p>
      </div>

      {/* Experience Cards with luminous champagne-gold outlines */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            className="kpi-card p-7 sm:p-10 rounded-3xl relative group overflow-hidden"
          >
            {/* Luminous Top Glow Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-amber-400/20 pb-5 mb-6">
              <div>
                <span className="text-xs font-mono text-amber-300 uppercase tracking-wider font-semibold">
                  {exp.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {exp.role}
                </h3>
                <div className="text-base font-semibold text-neutral-200 mt-1">
                  {exp.company}
                </div>
              </div>

              <div className="text-xs font-mono text-neutral-300 sm:text-right">
                <div className="text-amber-200 font-bold">{exp.period}</div>
                <div className="text-neutral-400 mt-1 font-semibold">DURATION: {exp.duration}</div>
              </div>
            </div>

            {/* Bullet achievements */}
            <div className="space-y-3.5">
              {exp.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3.5 text-sm text-neutral-200 font-light leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] flex-shrink-0 mt-2" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-amber-400/20 flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase font-semibold">
              <span>RECORD_0{idx + 1} // AUTHENTICATED INDUSTRIAL LOG</span>
              <span className="text-amber-300">ORBITAL SECTOR: SATURN</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
