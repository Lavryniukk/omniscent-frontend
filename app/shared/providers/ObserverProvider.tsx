"use client";
import { useEffect } from "react";

// Create Context

// Provider Component
export const ObserverProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Set the value that will be provided to components
  useEffect(() => {
    const animated_elems = document.querySelectorAll(".observe");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((elem) => {
        elem.isIntersecting && elem.target.classList.add("observe-show");
      });
    });

    // Observe the elements
    animated_elems.forEach((elem) => {
      observer.observe(elem);
    });

    // Cleanup observer on unmount
    return () => {
      animated_elems.forEach((elem) => {
        observer.unobserve(elem);
      });
    };
  }, []);
  return <div>{children}</div>;
};

// Export the context for use in other components
