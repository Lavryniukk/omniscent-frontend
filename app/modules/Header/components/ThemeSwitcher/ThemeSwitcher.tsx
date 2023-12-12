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
      className="w-[78px] p-1 relative cursor-pointer h-8 flex items-center justify-around   shadow-accent border-accent bg-secondary rounded-full"
    >
      <BsSunFill className="h-full aspect-square text-accent" />
      <BsMoonFill className="h-full aspect-square  text-accent" />
      <motion.div
        animate={{
          x: theme === "dark" ? 40 : 6,
        }}
        className="h-6 aspect-square left-1 absolute bg-text/50 rounded-full text-accent"
      ></motion.div>
    </div>
  );
}
