import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050712",
        card: "rgba(255,255,255,0.06)",
        stroke: "rgba(255,255,255,0.12)",
        muted: "#9CA3AF"
      },
      boxShadow: {
        glow: "0 0 80px rgba(124,58,237,0.28)"
      }
    }
  },
  plugins: []
};

export default config;
