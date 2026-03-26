import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F5F0E6",
        terracotta: "#D4856A",
        "terracotta-dark": "#C67B5C",
        sage: "#8FA87D",
        "sage-dark": "#6E8A62",
        charcoal: "#3D3D3D",
        cream: "#FDFBF7",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
