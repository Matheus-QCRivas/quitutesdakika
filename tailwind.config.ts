import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tijolo: "#A65C4F",
        rose: "#E39A8F",
        creme: "#F8EDE1",
        areia: "#BFB29A",
        oliva: "#6D6D5A",
        cacau: "#5C3A2E",
      },
      fontFamily: {
        titulo: ["var(--font-playfair)", "serif"],
        assinatura: ["var(--font-marck)", "cursive"],
      },
    },
  },
};

export default config;
