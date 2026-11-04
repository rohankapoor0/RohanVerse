import React from 'react';
import PlanetSphere from './PlanetSphere';
import { ideasAndResearch } from '../data';

/**
 * Section: Ideas & Research / Jupiter (Soft Pink & Gold)
 * Continuous scroll integration with luminous KPI cards.
 */
export default function IdeasSection() {
  const accent = "#f472b6"; // Jupiter soft pink

  return (
    <section id="ideas" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 relative z-10">
      
      {/* Section Header */}
      <div className="space-y-4 border-b border-amber-400/30 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest-plus uppercase text-amber-300">
          <PlanetSphere planetName="Jupiter" accent={accent} size={16} />
          <span>SECTOR 05 // JUPITER · RESEARCH BLUEPRINTS & HARDWARE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          Theoretical & Experimental Blueprints
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          Deep dives into empirical attention-span dynamics, hardware avionics with Team Airavat, and deterministic multi-agent state machines.
        </p>
      </div>

      {/* Blueprints Grid with luminous gold & pink border accents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ideasAndResearch.map((item, idx) => (
          <div
            key={item.title}
            className="kpi-card p-7 rounded-3xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-neutral-400 mb-4 pb-2 border-b border-amber-400/20 font-semibold">
                <span className="text-pink-300">{item.kind}</span>
                <span className="text-amber-300">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-pink-200 transition-colors mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-amber-400/20">
              <div className="text-[10px] font-mono text-amber-400 uppercase mb-2 font-semibold">
                EXPERIMENTAL METHODOLOGIES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-neutral-950 border border-amber-400/30 text-[11px] font-mono text-neutral-200 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research Philosophy Callout */}
      <div className="kpi-card p-8 sm:p-10 rounded-3xl text-neutral-200 font-light text-sm sm:text-base leading-relaxed space-y-3">
        <div className="text-xs font-mono text-amber-300 uppercase tracking-widest font-semibold">
          PHILOSOPHY OF INTELLIGENCE
        </div>
        <p>
          "Artificial Intelligence shouldn't be a generic black box. The strongest systems combine deterministic system design, rigorous empirical profiling (latency, memory, token cost), and human-centric interfaces built for real utility."
        </p>
        <div className="text-xs font-mono text-neutral-400 pt-2 font-semibold">
          — Rohan Kapoor · Rohanverse Architectural Notes
        </div>
      </div>

    </section>
  );
}
