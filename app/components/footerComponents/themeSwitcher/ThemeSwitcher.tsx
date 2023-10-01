"use client";
import { useEffect } from "react";
import useTheme from "@/app/shared/storages/themeStorage";
import { BsSun, BsMoon } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
let Switcher = () => {
  const theme = useTheme((state) => state.theme);
  const setTheme = useTheme((state) => state.setTheme);
  let handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  let position;
  switch (theme) {
    case "light":
      position = "left-[4%]";
      break;
    case "dark":
      position = "left-[37%]";
      break;
    case "system":
      position = "left-[70.4%]";
      break;

    default:
      break;
  }
  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className=" border-accent border select-none flex items-center relative justify-around rounded-full w-24 h-8"
    >
      <div
        className={`aspect-square -z-10 w-6 ${position} transition-all duration-150 bg-secondary rounded-full absolute`}
      />
      <BsSun
        onClick={() => {
          setTheme("light");
        }}
        className={`text-accent cursor-pointer  ${
          theme === "light" && "text-text"
        }`}
      />
      <BsMoon
        onClick={() => {
          setTheme("dark");
        }}
        className={`text-accent cursor-pointer ${
          theme === "dark" && "text-text"
        }`}
      />
      <FiMonitor
        onClick={() => {
          setTheme("system");
        }}
        className={`text-accent cursor-pointer bg-transparent ${
          theme === "system" && "text-text"
        }`}
      />
    </div>
  );
};
export default Switcher;
