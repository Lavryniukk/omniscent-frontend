"use client";
import { create } from "zustand";
type theme = "light" | "dark" | "system";
interface ThemeTypes {
  theme: theme;
  setTheme: (newTheme: theme) => void;
}
let useTheme = create<ThemeTypes>((set, get) => ({
  theme: "system",
  setTheme: (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (newTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    set({ theme: newTheme });
  },
}));

export default useTheme;
