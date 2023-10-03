"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";
interface ThemeInterface {
  theme: string;
  updateTheme: (value: string) => void;
}
let ThemeContext = createContext<ThemeInterface>({
  theme: "system",
  updateTheme: () => {},
});
export let useTheme = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  let cookieTheme = Cookies.get("theme");
  let [theme, setTheme] = useState<string>("system");
  cookieTheme && setTheme(cookieTheme);

  let updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    Cookies.set("theme", newTheme);
    console.log("Changes theme to ", newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
