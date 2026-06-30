import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream that doesn't fight with photography
        cream: "#F4F0E8",
        "cream-deep": "#E8E0D2",
        // Warm near-black, not pure
        ink: "#1A1814",
        "ink-soft": "#3D362E",
        // KOM red — terracotta, warmer than orange neon
        kom: "#C24B1E",
        "kom-deep": "#8E3614",
        // Alpine moss for secondary accent
        moss: "#3E5C50",
        // Off-white card backgrounds
        bone: "#FAF7F1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
