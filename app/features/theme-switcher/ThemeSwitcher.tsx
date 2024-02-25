"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="w-14 relative p-0.5 cursor-pointer h-6 flex items-center justify-around box-content rounded-full"
    >
      <Sun className="h-full rounded-full aspect-square w-5  text-azure-950 dark:text-azure-50" />
      <Moon className="h-full rounded-full aspect-square w-5 text-azure-950 dark:text-azure-50" />
      <motion.div
        initial={{
          x: 6,
        }}
        animate={{
          x: theme === "dark" ? 32 : 4.5,
        }}
        transition={{ type: "tween", duration: 0.2 }} // set animation to strict animation type, not spring
        className="w-6 left-0 -bottom-0.5 h-0.5 absolute  backdrop-blur rounded-full bg-azure-950 dark:bg-azure-50"
      ></motion.div>
    </div>
  );
}
