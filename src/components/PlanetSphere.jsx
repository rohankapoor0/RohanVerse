import React from 'react';

/**
 * Realistic Miniature Planetary Visual
 * Renders atmospheric shadows, terminator line, axial tilt, and Saturn's rings
 */
export default function PlanetSphere({
  planetName,
  accent,
  size = 32,
  isCurrent = false,
  isHovered = false,
}) {
  // Planetary texture simulation via layered spherical gradients
  const renderPlanetBody = () => {
    switch (planetName) {
      case 'Earth':
        // Electric blue atmospheric halo with ocean and cloud gradients
        return (
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-500"
            style={{
              background: `radial-gradient(circle at 35% 30%, #a5f3fc 0%, #38bdf8 35%, #0284c7 65%, #082f49 90%, #000000 100%)`,
              boxShadow: isHovered || isCurrent
                ? `0 0 20px -2px #38bdf8, inset -4px -4px 10px #000000`
                : `0 0 10px -3px #0284c7, inset -3px -3px 8px #000000`,
            }}
          >
            {/* Atmospheric terminator shadow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)',
              }}
            />
          </div>
        );

      case 'Neptune':
        // Deep violet & azure bands
        return (
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-500"
            style={{
              background: `radial-gradient(circle at 35% 30%, #e9d5ff 0%, #a855f7 40%, #7e22ce 70%, #3b0764 92%, #000000 100%)`,
              boxShadow: isHovered || isCurrent
                ? `0 0 20px -2px #a855f7, inset -4px -4px 10px #000000`
                : `0 0 10px -3px #7e22ce, inset -3px -3px 8px #000000`,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(140deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)',
              }}
            />
          </div>
        );

      case 'Mars':
        // Warm iron oxide orange & rust shadows
        return (
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-500"
            style={{
              background: `radial-gradient(circle at 32% 28%, #fed7aa 0%, #f97316 40%, #c2410c 70%, #431407 92%, #000000 100%)`,
              boxShadow: isHovered || isCurrent
                ? `0 0 20px -2px #f97316, inset -4px -4px 10px #000000`
                : `0 0 10px -3px #ea580c, inset -3px -3px 8px #000000`,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(130deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)',
              }}
            />
          </div>
        );

      case 'Saturn':
        // Golden amber gas giant with realistic ring system
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Saturn's Rings (Tilted plane) */}
            <div
              className="absolute w-[185%] h-[55%] rounded-[50%] pointer-events-none transition-opacity duration-300"
              style={{
                border: '2px solid rgba(245, 158, 11, 0.75)',
                boxShadow: '0 0 8px rgba(245, 158, 11, 0.4), inset 0 0 6px rgba(217, 119, 6, 0.6)',
                transform: 'rotate(-26deg)',
              }}
            />
            {/* Planet Body */}
            <div
              className="w-full h-full rounded-full relative overflow-hidden z-10"
              style={{
                background: `radial-gradient(circle at 35% 30%, #fef3c7 0%, #f59e0b 38%, #b45309 68%, #451a03 92%, #000000 100%)`,
                boxShadow: isHovered || isCurrent
                  ? `0 0 20px -2px #f59e0b, inset -4px -4px 10px #000000`
                  : `0 0 10px -3px #d97706, inset -3px -3px 8px #000000`,
              }}
            >
              {/* Ring shadow cast onto planet surface */}
              <div
                className="absolute w-full h-[3px] top-[48%] -rotate-[26deg] bg-black/70 blur-[0.5px]"
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)',
                }}
              />
            </div>
          </div>
        );

      case 'Jupiter':
        // Soft pink & storm clouds
        return (
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-500"
            style={{
              background: `radial-gradient(circle at 35% 28%, #fce7f3 0%, #f472b6 38%, #db2777 68%, #500724 92%, #000000 100%)`,
              boxShadow: isHovered || isCurrent
                ? `0 0 20px -2px #f472b6, inset -4px -4px 10px #000000`
                : `0 0 10px -3px #be185d, inset -3px -3px 8px #000000`,
            }}
          >
            {/* Atmospheric cloud bands */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.6)_3px,rgba(0,0,0,0.6)_6px)]" />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)',
              }}
            />
          </div>
        );

      case 'Mercury':
      default:
        // Metallic silver & cratered shadow
        return (
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-500"
            style={{
              background: `radial-gradient(circle at 32% 28%, #ffffff 0%, #cbd5e1 35%, #64748b 70%, #0f172a 92%, #000000 100%)`,
              boxShadow: isHovered || isCurrent
                ? `0 0 20px -2px #ffffff, inset -4px -4px 10px #000000`
                : `0 0 10px -3px #94a3b8, inset -3px -3px 8px #000000`,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.95) 100%)',
              }}
            />
          </div>
        );
    }
  };

  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: isHovered || isCurrent ? 'scale(1.12)' : 'scale(1.0)',
      }}
    >
      {renderPlanetBody()}
    </div>
  );
}

