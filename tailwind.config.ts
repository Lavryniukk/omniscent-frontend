import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          "0%": {
            backgroundColor: "rgb(var(--accent))",
            transform: "translateX(-100%)",
          },
          "50%": {
            backgroundColor: "rgb(var(--secondary))",
            transform: "translateX(25%)",
          },
          "100%": {
            backgroundColor: "rgb(var(--accent))",
            transform: "translateX(100%)",
          },
        },
        movingBackgroundLeft: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "85% 0%",
          },
        },
        movingBackgroundRight: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "-85% 0%",
          },
        },
      },
      animation: {
        movingBackgroundLeft: "movingBackgroundLeft 10s linear infinite",
        movingBackgroundRight: "movingBackgroundRight 10s linear infinite",
        skeleton: "skeleton 1.5s linear infinite",
        "spin-slow": "spin 10s linear infinite",
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
        azure: {
          "50": "#f1f7fe",
          "100": "#e3edfd",
          "200": "#bdd8f9",
          "300": "#84b7f5",
          "400": "#4493ee",
          "500": "#1a74db",
          "600": "#0d5bba",
          "700": "#15509e",
          "800": "#0b274c",
          "900": "#0b203c",
          "950": "#050d1a",
        },
      },
      fontFamily: {
        inter: "var(--inter-font)",
      },
      fontSize: {
        xxs: "6px",
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
