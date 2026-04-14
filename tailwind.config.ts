import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#0B3D2E",
          900: "#0F4A37",
          700: "#1C6347",
          500: "#2E8159",
        },
        gold: {
          champagne: "#C9A961",
          deep: "#8F6F2A",
          foil: "#E4C977",
        },
        ivory: "#F5F1E8",
        bone: "#EAE3D1",
        charcoal: "#1A1A1A",
        graphite: "#3A3A3A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
        wider: "0.15em",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
      },
      boxShadow: {
        luxe: "0 1px 2px rgba(11, 61, 46, 0.04), 0 20px 48px -24px rgba(11, 61, 46, 0.18)",
        "gold-glow": "0 0 0 1px rgba(201, 169, 97, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
