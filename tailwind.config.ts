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
        dark: {
          primary: "#121212",
          secondary: "#e0e0e0",
          accent: "#F44336",
        },
        light: {
          primary: "#F5F5F5",
          secondary: "#333333",
          accent: "#F44336",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
