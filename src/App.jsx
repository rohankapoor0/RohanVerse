import React, { useState, useEffect } from 'react';
import BlackHoleCSS from './components/BlackHoleCSS';
import PlanetNav from './components/PlanetNav';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import IdeasSection from './components/IdeasSection';
import ContactSection from './components/ContactSection';
import { planets } from './data';

/**
 * Continuous Scrollable Portfolio Architecture
 * - Single continuous vertical scroll across all sections
 * - Planet navigation smoothly scrolls to the target element
 * - Clark is 100% inline on the homepage (no modal / popup / chat bar / overlay)
 */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll position to update active planetary sector & progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? Math.min(1, Math.max(0, currentScroll / totalScroll)) : 0);

      // Detect which section is currently in view
      const sectionIds = planets.map((p) => p.id);
      const scrollPos = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPlanet = planets.find((p) => p.id === activeSection) || planets[0];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-amber-300 selection:text-black font-sans overflow-x-hidden">
      
      {/* 1. Vibrant Interstellar Gargantua Accretion Horizon (Zero dimming, intense white-gold) */}
      <BlackHoleCSS />

      {/* 2. Floating Minimal Planet Navigation Bar with Scroll Progress */}
      <PlanetNav
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />

      {/* 3. Subtle Sector Telemetry in bottom corner */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-neutral-300 bg-black/90 px-3.5 py-1.5 rounded-full border border-amber-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.25)]">
        <span
          className="w-1.5 h-1.5 rounded-full shadow-[0_0_6px_#fbbf24]"
          style={{ backgroundColor: currentPlanet.accent }}
        />
        <span>SECTOR: <strong className="text-white">{currentPlanet.name.toUpperCase()}</strong> ({currentPlanet.planetName.toUpperCase()})</span>
        <span className="text-neutral-500">·</span>
        <span className="text-amber-300">{currentPlanet.coord}</span>
      </div>

      {/* 4. Continuous Vertical Scroll Architecture */}
      <main className="relative z-10 space-y-12">
        <HomeSection onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <IdeasSection />
        <ContactSection />
      </main>

    </div>
  );
}
