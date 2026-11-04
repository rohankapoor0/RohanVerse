import React from 'react';
import { Award, Trophy, Medal, Video, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { accolades, certifications } from '../data';

const iconMap = {
  Trophy,
  Medal,
  Youtube: Video,
  Heart,
  Sparkles
};

export default function AccoladesAndCerts() {
  return (
    <section id="accolades" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Accolades Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wide uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Cosmic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Trophies of the Multiverse
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            From national Olympiad podiums to digital community building and grassroots humanitarian outreach.
          </p>
        </div>

        {/* Accolades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accolades.map((acc) => {
            const Icon = iconMap[acc.icon] || Trophy;
            return (
              <div
                key={acc.title}
                className="group relative p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {acc.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-amber-300 transition-colors">
                    {acc.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mb-3">
                    {acc.org}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {acc.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-[10px] font-mono text-slate-500">
                  <span className="text-amber-400/80">VERIFIED HONOR</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Row */}
        <div className="pt-10 border-t border-white/10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Industry Certifications & Credentials
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              Endorsed by Global Tech Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-400/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[10px] text-cyan-400">{cert.issuer}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <h4 className="text-xs font-semibold text-slate-200 leading-snug">
                    {cert.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

