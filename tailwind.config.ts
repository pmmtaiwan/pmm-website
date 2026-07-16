import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f5efe4",
        paper: "#efe7d8",
        charcoal: "#10100e",
        moss: "#29382d",
        wine: "#5a2c34",
        brass: "#b98a46",
        teal: "#193d43"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "Noto Serif TC", "serif"],
        sans: ["Arial", "Noto Sans TC", "sans-serif"]
      },
      maxWidth: {
        site: "1180px"
      }
    }
  },
  plugins: []
};

export default config;
