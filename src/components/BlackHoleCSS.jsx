import React from 'react';

/**
 * Hyper-Vibrant Interstellar Gargantua Accretion Horizon (Pure CSS)
 * - Removed all dark overlays, opacity reductions, and dimming filters.
 * - Searing intense white-hot photon rim.
 * - Radiant champagne-gold and fiery molten amber thermal emission.
 * - Deep volumetric lensing halo radiating upward into the pitch-black void.
 */
export default function BlackHoleCSS() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black select-none">
      
      {/* 1. Deep Space Cold Stars */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 12% 14%, rgba(255,255,255,0.95), transparent),
            radial-gradient(1.5px 1.5px at 38% 9%, rgba(255,250,230,0.95), transparent),
            radial-gradient(2px 2px at 82% 16%, rgba(255,255,255,1), transparent),
            radial-gradient(1px 1px at 24% 28%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 91% 32%, rgba(220,240,255,0.9), transparent),
            radial-gradient(2px 2px at 8% 44%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 64% 22%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 48% 48%, rgba(255,245,210,0.85), transparent),
            radial-gradient(1px 1px at 75% 55%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 15% 72%, rgba(255,255,255,0.85), transparent)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* 2. Deep Volumetric Thermal Core (Upward radiating champagne & molten amber corona) */}
      <div 
        className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 w-[160vw] h-[95vh] rounded-[100%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 220, 140, 0.5) 0%, rgba(245, 158, 11, 0.35) 28%, rgba(217, 119, 6, 0.2) 52%, rgba(180, 83, 9, 0.08) 72%, transparent 88%)',
          filter: 'blur(50px)',
        }}
      />

      {/* 3. Outer Broad Accretion Halo */}
      <div 
        className="absolute bottom-[-24vw] left-1/2 -translate-x-1/2 w-[150vw] h-[64vw] rounded-[50%/50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 46%, rgba(255, 255, 255, 0.55) 0%, rgba(254, 240, 138, 0.45) 20%, rgba(245, 158, 11, 0.32) 42%, rgba(180, 83, 9, 0.15) 65%, transparent 80%)',
          filter: 'blur(25px)',
        }}
      />

      {/* 4. Secondary Lensed Outer Light Arc */}
      <div 
        className="absolute bottom-[-19.5vw] left-1/2 -translate-x-1/2 w-[138vw] h-[58vw] rounded-[50%/50%] pointer-events-none"
        style={{
          borderTop: '3px solid rgba(251, 191, 36, 0.95)',
          boxShadow: `
            0 -10px 45px rgba(245, 158, 11, 0.9),
            0 -25px 90px rgba(217, 119, 6, 0.65),
            inset 0 12px 35px rgba(255, 235, 160, 0.5)
          `,
          filter: 'blur(3px)',
        }}
      />

      {/* 5. PRIMARY INTENSE PHOTON ACCRETION RIM (Searing, razor-sharp pure white-gold boundary) */}
      <div 
        className="absolute bottom-[-17.8vw] left-1/2 -translate-x-1/2 w-[132vw] h-[55vw] rounded-[50%/50%] pointer-events-none"
        style={{
          borderTop: '4.5px solid #ffffff',
          boxShadow: `
            0 -4px 18px 4px #ffffff,
            0 -10px 40px 10px rgba(254, 243, 199, 1),
            0 -25px 90px 22px rgba(245, 158, 11, 0.95),
            0 -55px 170px 45px rgba(217, 119, 6, 0.75),
            0 -90px 260px 80px rgba(180, 83, 9, 0.45),
            inset 0 15px 50px rgba(255, 255, 255, 0.8)
          `,
        }}
      />

      {/* 6. Relativistic Plasma Beaming (Vibrant white-hot stream on the approaching edge) */}
      <div 
        className="absolute bottom-[-17.8vw] left-1/2 -translate-x-1/2 w-[132vw] h-[55vw] rounded-[50%/50%] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(254,240,138,0.7) 25%, rgba(245,158,11,0.4) 60%, rgba(217,119,6,0.15) 100%)',
          maskImage: 'linear-gradient(to top, transparent 94%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 94%, black 100%)',
          filter: 'blur(1.5px)',
        }}
      />

      {/* 7. Fine-Line Einstein Photon Sphere (Razor-edge highlight) */}
      <div 
        className="absolute bottom-[-17.2vw] left-1/2 -translate-x-1/2 w-[130.5vw] h-[53.8vw] rounded-[50%/50%] pointer-events-none"
        style={{
          borderTop: '2px solid rgba(255, 255, 255, 1)',
          boxShadow: '0 -3px 15px rgba(255, 255, 255, 0.95), 0 -8px 30px rgba(254, 215, 170, 0.8)',
        }}
      />

      {/* 8. EVENT HORIZON VOID (Deep Pitch-Black Anchor) */}
      <div 
        className="absolute bottom-[-28vw] left-1/2 -translate-x-1/2 w-[129vw] h-[52vw] rounded-[50%/50%] pointer-events-none bg-black"
        style={{
          backgroundColor: '#000000',
          boxShadow: 'inset 0 25px 60px rgba(0, 0, 0, 1)',
        }}
      />

    </div>
  );
}
