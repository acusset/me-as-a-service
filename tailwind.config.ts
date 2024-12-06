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
        'float-slow': {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0) rotate(0deg)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(40px) rotate(10deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-8deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-medium': 'float-medium 15s ease-in-out infinite',
        'float-fast': 'float-fast 12s ease-in-out infinite',
      },
    },

  },
  plugins: [],
} satisfies Config;
