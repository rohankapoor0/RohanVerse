import React, { useState } from 'react';
import { 
  Film, 
  Bot, 
  ShieldAlert, 
  HeartPulse, 
  Apple, 
  BarChart3, 
  FileCheck, 
  BrainCircuit, 
  Send,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { projects, realms } from '../data';

// Map string names to lucide icons
const iconMap = {
  Film,
  Bot,
  ShieldAlert,
  HeartPulse,
  Apple,
  BarChart3,
  FileCheck,
  BrainCircuit,
  Send
};

export default function MultiverseMatrix({ activeRealm, setActiveRealm, onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projects.filter((item) => {
    if (selectedFilter === "all") return true;
    return item.realm === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Parallel Realities • Projects & Inventions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            The Rohanverse <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Nexus</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every project in my resume represents an alternate timeline of engineering — from neural recommendation systems and personal digital twins to web security and neurodivergent health tools.
          </p>
        </div>

        {/* Realms Selector / Dimensions */}
        <div id="realms" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {realms.map((realm) => {
            const isSelected = selectedFilter === realm.id;
            return (
              <button
                key={realm.id}
                onClick={() => setSelectedFilter(isSelected ? "all" : realm.id)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 text-left border overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-950/60 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                {/* Glow backdrop on select */}
                <div 
                  className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl transition-opacity duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-20 group-hover:opacity-40'
                  }`}
                  style={{ background: realm.glow }}
                />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {realm.badge}
                  </span>
                  <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-cyan-400 animate-ping' : 'bg-slate-600'}`} />
                </div>

                <h3 className="text-base font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                  {realm.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {realm.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Filter bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>SHOWING: <strong className="text-white uppercase">{selectedFilter === 'all' ? 'All 9 Universes' : selectedFilter}</strong></span>
          </div>

          {selectedFilter !== 'all' && (
            <button
              onClick={() => setSelectedFilter('all')}
              className="text-xs text-cyan-400 hover:text-cyan-300 underline font-mono"
            >
              Reset Dimension Filter
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = iconMap[project.icon] || Sparkles;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                {/* Glowing edge on top */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white group-hover:border-cyan-400/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center space-x-2">
                      {project.featured && (
                        <span className="text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" /> Prime
                        </span>
                      )}
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium -mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer tech tags + metric */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] text-slate-500">SIGNATURE METRIC</span>
                    <span className="text-xs font-semibold text-slate-300 bg-white/5 px-2 py-0.5 rounded">
                      {project.metrics}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/5 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

