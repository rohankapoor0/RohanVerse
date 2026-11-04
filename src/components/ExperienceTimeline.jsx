import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import { internships } from '../data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      
      {/* Background glow strip */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Battlegrounds & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Engineering In The Field
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            From TCS Enterprise AI Labs to Sypha AI Developer Tooling and KOPSCO high-throughput system designs.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 space-y-12">
          {internships.map((job, idx) => (
            <div key={job.company} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node Orb */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 group-hover:scale-125 group-hover:border-indigo-400 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-indigo-950/40">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {job.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                      {job.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {job.period} ({job.duration})
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  {job.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
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

