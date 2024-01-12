"use client";
import { useEffect, useRef } from "react";

export default function ErrorAlert({ message }: { message: string }) {
  const errorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const errorElem = errorRef.current;
    errorElem?.classList.add("transalte-x-6");

    setTimeout(() => {
      errorElem?.classList.add("translate-x-[200%]");
    }, 3000);
  }, []);
  return (
    <div
      ref={errorRef}
      className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 fixed bottom-6 right-6 
	transition duration-300`}
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>{message}</p>
    </div>
  );
}
