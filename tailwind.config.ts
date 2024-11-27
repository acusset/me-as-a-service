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
    },

  },
  plugins: [],
} satisfies Config;
