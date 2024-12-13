import type {Config} from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eerie: "hsl(var(--eerie))",
        xanthous: "hsl(var(--xanthous))",
        alabaster: "hsl(var(--alabaster))",
        tekhelet: "hsl(var(--tekhelet))",
      },
      keyframes: {
        'shape-1': {
          '0%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-50%, -40%) scale(1.1) rotate(120deg)' },
          '66%': { transform: 'translate(-50%, -60%) scale(0.9) rotate(240deg)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1) rotate(360deg)' },
        },
        'shape-2': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '33%': { transform: 'scale(1.2) translate(50px, -30px)' },
          '66%': { transform: 'scale(0.8) translate(-30px, 50px)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        'shape-3': {
          '0%': { transform: 'scale(1) rotate(0deg) translate(0, 0)' },
          '50%': { transform: 'scale(1.3) rotate(180deg) translate(100px, -50px)' },
          '100%': { transform: 'scale(1) rotate(360deg) translate(0, 0)' },
        },
      },
      animation: {
        'shape-1': 'shape-1 30s ease-in-out infinite',
        'shape-2': 'shape-2 25s ease-in-out infinite',
        'shape-3': 'shape-3 40s ease-in-out infinite',
      },
    },

  },
  plugins: [],
} satisfies Config;
