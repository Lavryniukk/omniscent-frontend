import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

console.log("lev pidrila");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      width: {
        "10lg": "1000px",
      },
      height: {
        "10lg": "1000px",
      },
      maxWidth: {
        "10xl": "1600px",
      },
      minHeight: {
        sm: "100px",
        md: "280px",
        lg: "340px",
      },
      colors: {
        primary: { ...colors.teal, DEFAULT: colors.teal[900] },
        secondary: { ...colors.neutral, DEFAULT: colors.neutral[800] },
        accent: { ...colors.neutral, DEFAULT: colors.neutral[400] },
        text: { ...colors.neutral, DEFAULT: colors.neutral[200] },
        background: "rgb(5,5,5)",
      },
      fontFamily: {
        inter: "var(--inter-font)",
      },
      fontSize: {
        xxs: "6px",
      },
      backgroundImage: {
        masha: "url('/images/masha.png')",
        kauch: "url('/images/nikolauchuk.jpg')",
        kros: "url('/images/legend.png')",
      },
    },
    screens: {
      xs: "464px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
