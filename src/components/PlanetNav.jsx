import React, { useState } from 'react';
import PlanetSphere from './PlanetSphere';
import { planets } from '../data';

/**
 * Continuous Scroll Planet Navigation Bar
 * - Smoothly scrolls to each section on the continuous page
 * - Highlights active section based on current scroll position
 * - Displays thin luminous gold scroll progress indicator
 */
export default function PlanetNav({ activeSection, scrollProgress }) {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw]">
      
      {/* Scroll Progress Bar at the top of the floating bar */}
      <div className="relative bg-black/90 border border-amber-400/50 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-2xl shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center gap-1 sm:gap-2">
        
        {/* Luminous progress track on top */}
        <div className="absolute -top-[1px] left-6 right-6 h-[2px] bg-neutral-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-white to-amber-300 shadow-[0_0_8px_#fbbf24] transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Observatory Logo Button */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 pl-1 pr-3 border-r border-white/15 group text-left"
          title="Scroll to Horizon Origin"
        >
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest-plus text-neutral-300 group-hover:text-amber-300 transition-colors uppercase hidden md:inline">
            ROHAN<span className="text-white font-bold">VERSE</span>
          </span>
        </button>

        {/* Planetary Section Nodes */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {planets.map((planet) => {
            const isCurrent = activeSection === planet.id;
            const isHovered = hoveredPlanet === planet.id;

            return (
              <button
                key={planet.id}
                onClick={() => scrollToSection(planet.id)}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
                className={`relative group flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'bg-neutral-900 text-white border border-amber-400/80 shadow-[0_0_15px_rgba(251,191,36,0.35)]'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60 border border-transparent'
                }`}
              >
                {/* 3D Miniature Planet */}
                <PlanetSphere
                  planetName={planet.planetName}
                  accent={planet.accent}
                  size={16}
                  isCurrent={isCurrent}
                  isHovered={isHovered}
                />

                {/* Section Name */}
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-xs font-semibold tracking-tight ${isCurrent ? 'text-amber-200' : ''}`}>
                    {planet.name}
                  </span>
                  <span className="text-[10px] font-mono opacity-50 uppercase hidden lg:inline">
                    · {planet.planetName}
                  </span>
                </div>

                {/* Luminous Active Dot */}
                {isCurrent && (
                  <span
                    className="w-1.5 h-1.5 rounded-full shadow-[0_0_6px_#fbbf24]"
                    style={{ backgroundColor: planet.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
