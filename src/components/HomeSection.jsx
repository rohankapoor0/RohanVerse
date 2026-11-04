import React, { useState } from 'react';
import PlanetSphere from './PlanetSphere';
import { personalInfo, planets } from '../data';

/**
 * Section: Home / Event Horizon
 * Refined Clark inline interactive unit:
 * - Speech bubble directly above the question bubbles (classic chatbot reply flow).
 * - Exactly 4 clickable question bubbles:
 *   1. "Who is Rohan?"
 *   2. "What has he built?"
 *   3. "What are his strongest skills?"
 *   4. "What makes him different?"
 * - Pure black, white text, and subtle champagne-gold & white accents (all blue glows/borders completely removed).
 * - Smooth fade-in on answer switch.
 * - 100% inline, responsive, zero popup/modal/chat input.
 */
export default function HomeSection({ onNavigate }) {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      id: 0,
      label: "Who is Rohan?",
      answer: (
        <>
          <strong className="text-white font-semibold">Rohan Kapoor</strong> is a third-year AI/ML engineer at <strong className="text-amber-200 font-semibold">Atlas SkillTech University</strong> (9.14 CGPA) and a <strong className="text-white font-semibold">2x National Cyber Olympiad Gold Medalist</strong>. He pairs deep theoretical foundations with high-throughput production development.
        </>
      ),
    },
    {
      id: 1,
      label: "What has he built?",
      answer: (
        <>
          He engineered independent AI systems including <strong className="text-amber-200 font-semibold">Clark</strong> (autonomous RAG digital twin), <strong className="text-white font-semibold">Hungr</strong>, and <strong className="text-white font-semibold">DineWise</strong>, alongside context-aware movie recommendations (<strong className="text-amber-200 font-semibold">StreamLens</strong>) and scam-detection web heuristics (<strong className="text-white font-semibold">WebsyApp</strong>).
        </>
      ),
    },
    {
      id: 2,
      label: "What are his strongest skills?",
      answer: (
        <>
          <strong className="text-white font-semibold">Autonomous Agentic AI</strong> (Gemini Enterprise Agents, LangChain, n8n), <strong className="text-amber-200 font-semibold">Production Machine Learning</strong> (Python, XGBoost, LightGBM, Pinecone), and <strong className="text-white font-semibold">System Design</strong> with low-latency APIs (FastAPI, React, Docker, WebAuthn).
        </>
      ),
    },
    {
      id: 3,
      label: "What makes him different?",
      answer: (
        <>
          A rare combination of <strong className="text-amber-200 font-semibold">hardcore technical execution</strong> and <strong className="text-white font-semibold">sharp product intuition</strong>. Whether profiling LLM token latency at <strong className="text-white font-semibold">Sypha</strong> or automating enterprise operations at <strong className="text-white font-semibold">TCS</strong>, he designs clean products that solve real problems.
        </>
      ),
    },
  ];

  return (
    <section id="home" className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Top Telemetry Stamp */}
      <div className="flex items-center justify-between text-neutral-300 font-mono text-[11px] tracking-widest-plus uppercase border-b border-amber-400/30 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse"></span>
          <span className="text-white font-semibold">EVENT HORIZON OBSERVER · RS 1.00</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-neutral-300">
          <span>COORDINATES: MUMBAI, INDIA</span>
          <span>CGPA: <strong className="text-amber-300 font-semibold">{personalInfo.cgpa.split(' ')[0]}</strong></span>
          <span className="text-amber-400/90 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]"></span>
            CLARK TWIN: ACTIVE
          </span>
        </div>
      </div>

      {/* Main Dual Identity Hero: ROHAN KAPOOR + CLARK (INLINE DIGITAL TWIN) */}
      <div className="my-auto py-8 lg:py-14 space-y-10 max-w-6xl mx-auto">
        
        {/* Origin Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black border border-amber-400/40 text-xs font-mono text-neutral-200 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <PlanetSphere planetName="Earth" accent="#38bdf8" size={13} />
            <span className="tracking-widest uppercase font-semibold text-white">SECTOR 01 // PARALLEL INTELLECT</span>
            <span className="text-amber-400">·</span>
            <span className="text-neutral-300">DIMENSION 616</span>
          </div>
        </div>

        {/* Dual Character Hero Grid: Rohan (Human Architect) + Clark (Digital Twin) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Rohan Kapoor Primary Identity (6 cols) */}
          <div className="lg:col-span-6 kpi-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30">
                  CREATOR & ARCHITECT
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  ATLAS SKILLTECH UNIV
                </span>
              </div>

              {/* Bold Distinctive Display Headline */}
              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tightest leading-[0.92] uppercase select-none drop-shadow-2xl">
                ROHAN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300">
                  KAPOOR
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-neutral-200 tracking-tight pt-1">
                AI Engineer & System Architect
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Quick Metrics Bar inside Rohan's Card */}
            <div className="pt-6 mt-6 border-t border-amber-400/20 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">ACADEMICS</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">9.14 CGPA</div>
              </div>
              <div className="border-x border-amber-400/20">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">OLYMPIAD</div>
                <div className="text-base sm:text-lg font-bold text-amber-300 font-mono">2x Gold</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">COMMUNITY</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">10K+ Subs</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Clark — My Digital Twin (6 cols) - CHATBOT-STYLE SPEECH ABOVE QUESTIONS */}
          <div className="lg:col-span-6 kpi-card p-7 sm:p-9 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-amber-300" />

            <div className="space-y-4">
              
              {/* Header: Avatar, Name & 'MY DIGITAL TWIN' Label (Pure Black/White/Gold) */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-400/20">
                <div className="flex items-center gap-3.5">
                  {/* Subtle AI-inspired Avatar */}
                  <div className="relative w-11 h-11 rounded-2xl bg-black border border-white/40 shadow-[0_0_15px_rgba(254,243,199,0.25)] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <span className="relative text-white font-mono font-bold text-sm tracking-tight">C·1</span>
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-300 to-white"></span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        CLARK
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 border border-amber-400/40 text-amber-200 font-semibold uppercase tracking-wider">
                        MY DIGITAL TWIN
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 -mt-0.5">
                      Autonomous Intelligence · Ready to Query
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* 1. Speech Bubble Response DIRECTLY ABOVE questions (Chatbot style) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  <span>CLARK'S RESPONSE:</span>
                  <span className="text-amber-300/80">INLINE REPL</span>
                </div>

                <div className="relative p-4 sm:p-5 rounded-2xl bg-black border border-amber-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] min-h-[96px] flex items-center">
                  {/* Subtle speech tail pointing down toward the questions */}
                  <div className="absolute -bottom-1.5 left-8 w-3 h-3 bg-black border-b border-r border-amber-400/40 rotate-45"></div>

                  <p 
                    key={activeQuestion}
                    className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed animate-in fade-in duration-200"
                  >
                    {questions[activeQuestion].answer}
                  </p>
                </div>
              </div>

              {/* 2. Exactly 4 Clickable Question Bubbles DIRECTLY BELOW the speech bubble */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider font-semibold">
                  SELECT A QUESTION TO ASK:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {questions.map((q) => {
                    const isSelected = activeQuestion === q.id;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setActiveQuestion(q.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all duration-200 flex items-center justify-between border ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.35)] ring-1 ring-amber-300/40'
                            : 'bg-black hover:bg-neutral-900 text-neutral-300 hover:text-white border-white/15 hover:border-amber-400/50'
                        }`}
                      >
                        <span className="truncate">{q.label}</span>
                        <span className={`text-[10px] font-mono ml-1.5 ${isSelected ? 'text-amber-300 font-bold' : 'text-neutral-500'}`}>
                          {isSelected ? '●' : '→'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Subtle Footer Telemetry */}
            <div className="pt-4 mt-4 border-t border-amber-400/20 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="text-amber-300 font-semibold">ZERO-LATENCY AI TWIN</span>
              <span>NO CHAT BAR · 100% INLINE</span>
            </div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('projects')}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-white via-amber-100 to-amber-300 text-black text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(251,191,36,0.5)] flex items-center gap-2"
          >
            <span>Explore Planetary Projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button
            onClick={() => onNavigate('experience')}
            className="px-7 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-neutral-100 hover:text-white text-xs font-semibold tracking-wider uppercase border border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300"
          >
            Experience Logs
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-neutral-100 hover:text-white text-xs font-mono tracking-wider uppercase border border-white/30 hover:border-amber-400/60 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            Direct Telemetry
          </button>
        </div>

      </div>

      {/* Bottom Planet Orbital Strip */}
      <div className="relative border-t border-amber-400/30 pt-6 pb-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 z-20">
        {planets.map((p) => (
          <button
            key={p.id}
            onClick={() => onNavigate(p.id)}
            className="kpi-card p-3.5 rounded-2xl text-left group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-wider font-semibold">
                {p.planetName}
              </span>
              <PlanetSphere planetName={p.planetName} accent={p.accent} size={15} />
            </div>
            <div className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors">
              {p.name}
            </div>
            <div className="text-[10px] font-mono text-neutral-300 truncate mt-0.5">
              {p.tagline}
            </div>
          </button>
        ))}
      </div>

    </section>
  );
}
