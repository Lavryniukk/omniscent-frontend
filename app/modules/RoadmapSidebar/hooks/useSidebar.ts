"use client";
import { useEffect, useState } from "react";

export default function useSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      let target = e.target as Element;
      if (isOpen && !target.closest(`.sidebar`) && !target.closest(".switch")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", closeSidebar);
    }

    return () => {
      if (isOpen) {
        window.removeEventListener("click", closeSidebar);
      }
    };
  }, [isOpen]);
  function closeSidebar() {
    setIsOpen(false);
  }
  function openSidebar() {
    setIsOpen(true);
  }
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return { isOpen, openSidebar, closeSidebar, toggleSidebar };
}
