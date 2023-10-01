"use client";
import { create } from "zustand";
import Cookies from "js-cookie";
type theme = "light" | "dark" | "system";
interface ThemeTypes {
  theme: string;
  setTheme: (newTheme: theme) => void;
}
const getTheme = () => {
  return Cookies.get("theme") || "system";
};

let useTheme = create<ThemeTypes>((set, get) => ({
  theme: getTheme(),
  setTheme: (newTheme) => {
    Cookies.set("theme", newTheme);
    set({ theme: newTheme });
    // document.documentElement.setAttribute("data-theme", newTheme);
  },
}));

export default useTheme;
