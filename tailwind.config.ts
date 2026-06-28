import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#030604",
        ink: "#07120d",
        panel: "rgba(255,255,255,0.055)",
        line: "rgba(255,255,255,0.12)",
        muted: "#94a3b8",
        neon: "#22c55e",
        aqua: "#22d3ee"
      },
      boxShadow: {
        glow: "0 0 90px rgba(34,197,94,0.28)",
        soft: "0 24px 90px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
