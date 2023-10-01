"use client";
import useTheme from "@/app/shared/storages/themeStorage";
import { BsSun, BsMoon } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";
let Switcher = () => {
  const theme = useTheme((state) => state.theme);
  const setTheme = useTheme((state) => state.setTheme);
  let handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  let position;
  switch (theme) {
    case "light":
      break;

    default:
      break;
  }
  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className="border border-accent select-none flex items-center relative justify-between rounded-full w-24 px-2 h-8"
    >
      {/* <div
        className={`aspect-square opacity-50 w-6 ${position} bg-secondary rounded-full absolute`}
      /> */}
      <BsSun
        onClick={() => {
          setTheme("light");
        }}
        className={`text-accent ${theme === "light" && "text-text"}`}
      />
      <BsMoon
        onClick={() => {
          setTheme("dark");
        }}
        className={`text-accent ${theme === "dark" && "text-text"}`}
      />
      <GrSystem
        onClick={() => {
          setTheme("system");
        }}
        className={`bg-accent ${theme === "system" && "bg-text"}`}
      />
    </div>
  );
};
export default Switcher;
