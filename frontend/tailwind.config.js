/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d1a',
        surface: '#151528',
        primary: '#ff566e',
        secondary: '#8e0dff',
        accent: '#00d4d9',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0c0',
        border: '#2a2a4a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 3s steps(40) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '50%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,86,110,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255,86,110,0.8)' },
        },
      },
    },
  },
  plugins: [],
}