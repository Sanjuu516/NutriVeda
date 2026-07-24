/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vedic: {
          bg1: '#F7F3EB',
          bg2: '#FAF8F2',
          bg3: '#FFFDF8',
          emerald: '#0F766E',
          emeraldDark: '#0D5C56',
          forest: '#14532D',
          gold: '#D4A017',
          goldLight: '#F3E5AB',
          copper: '#B45309',
          sand: '#E8DCC8',
          sandLight: '#F3EDDF',
          charcoal: '#1C1917',
          slate: '#44403C'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(15, 118, 110, 0.08), 0 8px 24px rgba(212, 160, 23, 0.05)',
        'glass-hover': '0 30px 60px rgba(15, 118, 110, 0.15), 0 12px 32px rgba(212, 160, 23, 0.1)',
        'gold-glow': '0 0 30px rgba(212, 160, 23, 0.3)',
        'emerald-glow': '0 0 30px rgba(15, 118, 110, 0.3)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'orbit': 'orbit 15s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212, 160, 23, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(15, 118, 110, 0.6))' }
        }
      }
    },
  },
  plugins: [],
}
