import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cool near-white, matching the reference's bright sections
        cream: "#F7F6F4",
        "cream-deep": "#ECEAE6",
        // Cool near-black / deep navy used in the footer
        ink: "#16141C",
        "ink-soft": "#4A4654",
        // Brand accent — the reference's violet CTA color
        kom: "#6C5CE7",
        "kom-deep": "#5546C9",
        // Alpine moss for secondary accent
        moss: "#3E5C50",
        // Off-white card backgrounds
        bone: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
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
