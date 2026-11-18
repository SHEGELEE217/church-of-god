// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌲 FOREST — primary brand
        forest: {
          50:  "#EAF5F0", 100: "#D1E8DC", 200: "#A3D1B9", 300: "#74B896",
          400: "#459F74", 500: "#2E8259", 600: "#1F6647", 700: "#174D35",
          800: "#103623", 900: "#081F14", 950: "#041009",
        },
        // 🧡 CORAL — youthful energy
        coral: {
          50:  "#FFF1EE", 100: "#FFDDD5", 200: "#FFBBB0", 300: "#FF9483",
          400: "#FF6B5B", 500: "#F04B3A", 600: "#D63020", 700: "#AE2317",
          800: "#871B12", 900: "#5F130C",
        },
        // ✨ GOLD — CTA & glory
        gold: {
          50:  "#FFF9E6", 100: "#FEEFB8", 200: "#FDE08A", 300: "#FBD05C",
          400: "#F4B942", 500: "#E5A227", 600: "#C2871A", 700: "#986A13",
          800: "#6F4D0D", 900: "#473307",
        },
        // 🌊 MINT — fresh revival
        mint: {
          50:  "#E6F7F4", 100: "#C0EBE4", 200: "#94DED2", 300: "#68D0BF",
          400: "#2EC4B6", 500: "#22A99D", 600: "#1A8A80", 700: "#136B63",
          800: "#0C4C45", 900: "#062E2A",
        },
        // 🤍 CREAM — warm background
        cream: {
          50:  "#FDFBF6", 100: "#FBF7EF", 200: "#F5EEE0",
          300: "#EFE4CC", 400: "#E6D6B4", 500: "#D9C396",
        },
        // ⚫ INK — text scale
        ink: {
          50:  "#F5F5F4", 100: "#E7E7E4", 200: "#C9C9C2", 300: "#A8A89E",
          400: "#878779", 500: "#6B6B5D", 600: "#545449", 700: "#404037",
          800: "#2B2B24", 900: "#1A1A16", 950: "#0D0D0A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans:    ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(26, 26, 22, 0.08)",
        lift: "0 20px 60px -20px rgba(26, 26, 22, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float":   "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;