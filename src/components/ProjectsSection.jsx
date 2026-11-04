import React, { useState } from 'react';
import PlanetSphere from './PlanetSphere';
import { projects } from '../data';

/**
 * Section: Projects / Mars (Warm Orange & Luminous Black Hole Gold)
 * Continuous scroll integration with luminous KPI borders and interactive cinema display.
 */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const accent = "#f97316"; // Mars warm orange

  return (
    <section id="projects" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 relative z-10">
      
      {/* Section Header */}
      <div className="space-y-4 border-b border-amber-400/30 pb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest-plus uppercase text-amber-300">
          <PlanetSphere planetName="Mars" accent={accent} size={16} />
          <span>SECTOR 03 // MARS · AUTONOMOUS ARTIFACTS & ML ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
          Deployed Artifacts
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          Production-grade systems exploring autonomous agent orchestration, RAG embeddings, AI web security, and native iOS assistive tools.
        </p>
      </div>

      {/* Featured Project Cinema Display with luminous gold outlines */}
      {selectedProject && (
        <div className="kpi-card p-7 sm:p-10 rounded-3xl relative overflow-hidden">
          {/* Luminous Top Gold Arc */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-amber-300 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/50 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {selectedProject.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                {selectedProject.details}
              </p>

              {/* Distinguishing Metric with Gold highlight */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-amber-300 uppercase tracking-wider font-semibold">
                  ARCHITECTURAL ADVANTAGE
                </div>
                <div className="text-sm font-bold text-white font-mono mt-0.5 text-amber-100">
                  {selectedProject.metric}
                </div>
              </div>

              {/* Stack Chips with crisp borders */}
              <div className="pt-2 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-neutral-950 border border-amber-400/40 text-xs font-mono text-neutral-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Telemetry Column */}
            <div className="lg:w-72 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-amber-400/20 pt-6 lg:pt-0 lg:pl-8 space-y-4 text-xs font-mono">
              <div>
                <span className="text-neutral-400 uppercase font-semibold">ARTIFACT ID</span>
                <div className="text-amber-300 mt-1 uppercase font-bold tracking-wider">ARCH_{selectedProject.id}</div>
              </div>
              <div>
                <span className="text-neutral-400 uppercase font-semibold">SYSTEM STABILITY</span>
                <div className="text-emerald-400 mt-1 flex items-center gap-2 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  NOMINAL · PRODUCTION READY
                </div>
              </div>
              <div>
                <span className="text-neutral-400 uppercase font-semibold">COORDINATES</span>
                <div className="text-neutral-300 mt-1">48° 30' 36" S (MARS SECTOR)</div>
              </div>
              <div className="pt-4 border-t border-amber-400/20 text-neutral-400 text-[11px]">
                Clicking an artifact below swaps active telemetry in real time.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid for Selection with luminous borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj) => {
          const isCurrent = selectedProject?.id === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`kpi-card p-6 sm:p-7 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between group ${
                isCurrent
                  ? 'border-amber-300 shadow-[0_0_35px_rgba(251,191,36,0.5)] ring-1 ring-amber-300'
                  : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono uppercase text-neutral-400 font-semibold">
                  <span className="text-amber-300">{proj.category}</span>
                  <span className={isCurrent ? 'text-white font-bold' : 'text-neutral-500'}>
                    {isCurrent ? '● ACTIVE' : 'READY'}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors mb-2">
                  {proj.title}
                </h4>

                <p className="text-xs text-neutral-300 font-light line-clamp-3 leading-relaxed mb-4">
                  {proj.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-400/20 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{proj.stack.slice(0, 2).join(' · ')}</span>
                <span className="text-amber-300 font-semibold group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>
            </button>
          );
        })}
      </div>

    </section>
  );
}
