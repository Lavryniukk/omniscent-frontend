import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useLayoutEffect,
} from "react";
export const useTheme = () => {
  return useContext(ThemeContext);
};
// Create a context with a default value.
export const ThemeContext = createContext({
  theme: "dark", // default value
  setTheme: (theme: string) => {},
});
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState("dark"); // default theme

  // This effect runs once on mount, and anytime `setThemeState` function changes.
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setThemeState(initialTheme);
    setTheme(initialTheme);
  }, [theme, setThemeState]);

  const setTheme = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
    document.body.classList.add("bg-background");

    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
