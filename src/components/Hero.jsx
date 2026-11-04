import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  Compass, 
  Download, 
  ArrowRight, 
  Bot, 
  Cpu, 
  ShieldCheck, 
  MapPin, 
  Zap,
  Globe2
} from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero({ onOpenPortal, onExploreProjects }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Multiverse Spatial Rings / Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] border border-cyan-500/20 rounded-full animate-spin-slow pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] border border-dashed border-indigo-500/30 rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
            Welcome to the Rohanverse • Alternate Realities of Code
          </span>
        </div>

        {/* Main Title / Hero Typography */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy">{personalInfo.name}</span>.
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-300 font-sans tracking-normal">
              AI Engineer & Agent Architect
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Crafting autonomous agents, scalable machine learning systems, and secure intelligent applications across dimensions. Third-year CS (AI & ML) at <span className="text-slate-200 font-medium">Atlas SkillTech University</span>.
          </p>
        </div>

        {/* Core Stats / Quick Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between text-cyan-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-500">ACADEMICS</span>
            </div>
            <div className="text-xl font-bold text-white font-display">9.14 CGPA</div>
            <div className="text-xs text-slate-400 truncate">Atlas SkillTech Univ</div>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center justify-between text-indigo-400 mb-1">
              <Bot className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-500">EXPERIENCE</span>
            </div>
            <div className="text-xl font-bold text-white font-display">TCS & Sypha</div>
            <div className="text-xs text-slate-400 truncate">AI/ML & LLM Scaling</div>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left hover:border-purple-500/40 transition-colors">
            <div className="flex items-center justify-between text-purple-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-500">HONORS</span>
            </div>
            <div className="text-xl font-bold text-white font-display">2x Gold NCO</div>
            <div className="text-xs text-slate-400 truncate">National Cyber Olympiad</div>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between text-emerald-400 mb-1">
              <Globe2 className="w-4 h-4" />
              <span className="text-[10px] font-mono text-slate-500">COMMUNITY</span>
            </div>
            <div className="text-xl font-bold text-white font-display">10,000+</div>
            <div className="text-xs text-slate-400 truncate">YouTube Subscribers</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onExploreProjects}
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
          >
            <span>Explore Dimensions & Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenPortal}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Summon Digital Twin</span>
          </button>
        </div>

        {/* Location & Contact strip */}
        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            Mumbai, India
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Python, LangChain, SwiftUI, Gemini Agent Platform
          </span>
        </div>

      </div>
    </section>
  );
}

