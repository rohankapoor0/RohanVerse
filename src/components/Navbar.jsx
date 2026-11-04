import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Layers, 
  Briefcase, 
  Cpu, 
  Award, 
  GraduationCap, 
  Mail, 
  ExternalLink,
  Orbit,
  Compass,
  Menu,
  X,
  Share2
} from 'lucide-react';

export default function Navbar({ onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Realms", href: "#realms", icon: Layers },
    { label: "Artifacts", href: "#projects", icon: Compass },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Tech Matrix", href: "#skills", icon: Cpu },
    { label: "Trophies", href: "#accolades", icon: Award },
    { label: "Academia", href: "#academics", icon: GraduationCap },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-indigo-950/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Multiverse Identity */}
          <a href="#" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <Orbit className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent group-hover:to-cyan-400 transition-colors">
                ROHAN<span className="text-cyan-400 font-black">VERSE</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Reality-616 Online
              </span>
            </div>
          </a>

          {/* Desktop Nav Icons & Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400/80 group-hover:text-cyan-300 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Icons Top Right */}
          <div className="flex items-center space-x-3">
            <a
              href="mailto:rohankapoor2460@gmail.com"
              title="Transmit Cosmic Signal (Email)"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohankapoor0/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <Share2 className="w-4 h-4" />
            </a>

            {/* Launch Reality Portal Button */}
            <button
              onClick={onOpenPortal}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Enter Portal</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{item.label}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex items-center space-x-3">
            <a
              href="mailto:rohankapoor2460@gmail.com"
              className="flex-1 py-2 text-center text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300"
            >
              Email Rohan
            </a>
            <a
              href="https://www.linkedin.com/in/rohankapoor0/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

