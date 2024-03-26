"use client";
import { useEffect } from "react";

export default function useOutsideClick(target: string, callback: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target && !(event.target as Element).closest(`.${target}`)) {
        callback();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [target, callback]);
}
