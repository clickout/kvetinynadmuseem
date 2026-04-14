import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5016",
          light: "#3a6820",
          dark: "#1e3610",
        },
        accent: {
          DEFAULT: "#8B6914",
          light: "#a07c1a",
        },
        background: "#F7F5F0",
        "background-card": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};

export default config;
