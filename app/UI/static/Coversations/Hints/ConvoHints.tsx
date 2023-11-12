"use client";
import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

export default function Hints() {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <div className="h-fit space-y-2 w-fit ">
      <p className="text-2xl text-center font-semibold text-text">Hints</p>
      <div className="conversation-hint">
        You can always ask John for clarification
      </div>
      <div className="conversation-hint">
        John can provide additional examples, just ask!
      </div>
      <div className="conversation-hint">
        John can make mistakes, since he is still under development
      </div>
      <div className="conversation-hint">
        If anything strange occurs, you can always tell us!
      </div>
      <div
        className={`border-y h-14 px-2 space-y-4 border-accent transition-all duration-200 py-2 bg-secondary-950 h-${
          isOpen ? "60" : "14"
        } overflow-hidden`}
      >
        <h2 className="text-2xl text-text text-center font-semibold">
          Leave your feedback
        </h2>
        <textarea
          name="feedback"
          cols={10}
          rows={4}
          className="w-full bg-secondary rounded clear-input px-2 text-accent"
        ></textarea>
        <button className="w-full py-2 border-secondary border-2 rounded text-accent bg-transparent">
          Send
        </button>
      </div>
      <BsChevronCompactDown
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`text-accent cursor-pointer mx-auto text-2xl ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
}
