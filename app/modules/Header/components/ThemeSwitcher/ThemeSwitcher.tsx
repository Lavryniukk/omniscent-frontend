"use client";
import { motion } from "framer-motion";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeSwitcher({
  callback,
  theme,
}: {
  callback: () => void;
  theme: string;
}) {
  return (
    <div
      onClick={() => {
        callback();
      }}
      className="w-16 relative px-1 py-0.5 cursor-pointer h-8 flex items-center justify-around   shadow-accent border-accent border-2 box-content rounded-full"
    >
      <BsSunFill className="h-full rounded-full aspect-square w-5  text-accent" />
      <BsMoonFill className="h-full rounded-full aspect-square w-5  text-accent" />
      <motion.div
        initial={{
          x: 6,
        }}
        animate={{
          x: theme === "dark" ? 38 : 6,
        }}
        transition={{ type: "just", duration: 0.2 }} // set animation to strict animation type, not spring
        className="h-7 left-0 aspect-square absolute bg-accent rounded-full text-accent"
      ></motion.div>
    </div>
  );
}
