// "use client";
// import { useState, useEffect, useLayoutEffect } from "react";

// const useTheme = () => {
//   const [theme, setThemeState] = useState("dark"); // default theme

//   const setTheme = (newTheme: string) => {
//     localStorage.setItem("theme", newTheme);
//     document.body.classList.remove("light", "dark");
//     document.body.classList.add(newTheme);
//     setThemeState(newTheme);
//   };

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     const prefersDark =
//       window.matchMedia &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches;

//     const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
//     setTheme(initialTheme);
//   }, [setTheme]);

//   return { theme, setTheme };
// };

// export default useTheme;
