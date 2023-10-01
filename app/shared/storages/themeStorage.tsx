"use client";
import { create } from "zustand";
type theme = "light" | "dark" | "system";
interface ThemeTypes {
  theme: theme | null | string | undefined;
  setTheme: (newTheme: theme) => void;
  getTheme: () => theme | undefined;
}
let getSessionTheme = () => {
  try {
    if (sessionStorage.getItem("theme")) {
      return sessionStorage.getItem("theme");
    } else {
      return "system";
    }
  } catch (e) {
    console.log("An error occured", e);
  }
};
let useTheme = create<ThemeTypes>((set, get) => ({
  theme: getSessionTheme(),
  getTheme: () => {
    let res = sessionStorage.getItem("theme") as theme;
    if (res === "light" || res === "dark" || res === "system") return res;
  },
  setTheme: (newTheme) => {
    sessionStorage.setItem("theme", newTheme);
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
