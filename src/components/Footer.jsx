import React from 'react';
import { 
  Mail, 
  MapPin, 
  Sparkles, 
  Share2, 
  ArrowUp, 
  Orbit, 
  Terminal 
} from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02050c] pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background portal glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-indigo-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Contact Transmission Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-white/10 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Strategic AI Collaborations</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Ready to Build Across Universes?
          </h3>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300">
            Whether it's production Agentic AI workflows, LLM benchmark optimization, or next-generation web applications, let's connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 active:scale-95 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={personalInfo.linkedin || "https://www.linkedin.com/in/rohankapoor2460"}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/10 hover:border-white/20 active:scale-95 transition-all flex items-center gap-2"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn Network</span>
            </a>
          </div>
        </div>

        {/* Links & Attribution */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white">
              <Orbit className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-black text-white text-sm">ROHANVERSE</span>
              <p className="text-[11px] font-mono text-slate-500">© 2026 Rohan Kapoor • All Realities Reserved</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:rohankapoor2460@gmail.com"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-indigo-500/10 border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-400 flex items-center justify-center transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              title="Return to Multiverse Zenith"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

