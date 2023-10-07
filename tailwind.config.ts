import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
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
        primary: { ...colors.blue, DEFAULT: colors.blue[900] },
        secondary: { ...colors.neutral, DEFAULT: colors.neutral[800] },
        accent: { ...colors.neutral, DEFAULT: colors.neutral[400] },
        text: { ...colors.neutral, DEFAULT: colors.neutral[200] },
        background: { ...colors.neutral, DEFAULT: colors.neutral[950] },
      },
      fontFamily: {
        roboto: "var(--roboto-font)",
      },
      fontSize: {
        xxs: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
