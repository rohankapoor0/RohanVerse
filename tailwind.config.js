/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        obsidian: '#050505',
        planet: {
          earth: '#38bdf8',    // Electric blue
          neptune: '#a855f7',  // Violet
          mars: '#f97316',     // Warm orange
          saturn: '#f59e0b',   // Golden amber
          jupiter: '#f472b6',  // Soft pink
          mercury: '#e2e8f0',  // Silver
        }
      },
      fontFamily: {
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'super-tight': '-0.04em',
        'widest-plus': '0.25em',
      }
    },
  },
  plugins: [],
}
