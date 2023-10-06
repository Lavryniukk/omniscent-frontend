"use client";
import Cookies from "js-cookie";
import { create } from "zustand";
interface ThemeInterface {
  theme: string;
  setTheme: (value: string) => void;
}
let useTheme = create<ThemeInterface>((set) => ({
  theme: "",
  setTheme: (value) => {
    set({ theme: value });
    Cookies.set("theme", value);
  },
}));
