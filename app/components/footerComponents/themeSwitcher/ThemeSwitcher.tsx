"use client";
import { useTheme } from "@/app/shared/providers/ThemeProvider";
import { BsSun, BsMoon } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
let Switcher = () => {
  const { theme, updateTheme } = useTheme();

  let position;
  switch (theme) {
    case "light":
      position = "left-[4%]";
      break;
    case "dark":
      position = "left-[36.7%]";
      break;
    case "system":
      position = "left-[70.4%]";
      break;
  }
  console.log(position);
  return (
    <div className=" border-accent border select-none flex items-center relative justify-around rounded-full w-24 h-8">
      <div
        className={`aspect-square -z-10 w-6 ${position} transition-all duration-150 bg-secondary rounded-full absolute`}
      />
      <BsSun
        onClick={() => {
          updateTheme("light");
        }}
        className={`text-accent cursor-pointer  ${
          theme === "light" && "text-text"
        }`}
      />
      <BsMoon
        onClick={() => {
          updateTheme("dark");
        }}
        className={`text-accent cursor-pointer ${
          theme === "dark" && "text-text"
        }`}
      />
      <FiMonitor
        onClick={() => {
          updateTheme("system");
        }}
        className={`text-accent cursor-pointer bg-transparent ${
          theme === "system" && "text-text"
        }`}
      />
    </div>
  );
};
export default Switcher;
