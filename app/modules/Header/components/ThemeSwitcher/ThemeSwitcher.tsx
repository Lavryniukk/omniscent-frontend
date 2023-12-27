"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher({}: {}) {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="w-16 relative px-1 py-0.5 cursor-pointer h-8 flex items-center justify-around   shadow-accent border-accent border-2 box-content rounded-full"
    >
      <Sun className="h-full rounded-full aspect-square w-6  text-accent" />
      <Moon className="h-full rounded-full aspect-square w-6  text-accent" />
      <motion.div
        initial={{
          x: 6,
        }}
        animate={{
          x: theme === "dark" ? 38 : 6,
        }}
        transition={{ type: "tween", duration: 0.2 }} // set animation to strict animation type, not spring
        className="h-7 left-0 aspect-square absolute bg-accent rounded-full text-accent"
      ></motion.div>
    </div>
  );
}
