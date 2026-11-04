import React from 'react';
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react';
import { academics } from '../data';

export default function Academia() {
  return (
    <section id="academics" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wide uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor • Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Scholastic Pedigree
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Deep foundational knowledge in Computer Science, Artificial Intelligence, and Mathematical Modeling.
          </p>
        </div>

        {/* Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academics.map((item, idx) => (
            <div
              key={item.degree}
              className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0 
                  ? 'bg-gradient-to-b from-slate-900 via-indigo-950/20 to-slate-900 border-indigo-500/40 shadow-xl shadow-indigo-950/30 md:scale-105' 
                  : 'bg-slate-900/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {item.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.timeline}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2 leading-snug">
                  {item.degree}
                </h3>
                <p className="text-sm text-cyan-400 font-medium mb-4">
                  {item.school}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono text-slate-500 uppercase">SCORE / CGPA</div>
                <div className="text-xl font-black text-white font-display mt-0.5">
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

