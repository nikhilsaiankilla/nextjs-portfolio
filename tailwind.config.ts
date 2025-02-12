import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:{
          primary: "#121212",
          secondary:"#ABABAB",
          accent: "#ffffff",
        },
        light:{
          primary: "#F5F5F5",
          secondary:"gray",
          accent: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
