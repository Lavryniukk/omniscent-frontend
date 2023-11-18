"use client";
import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

export default function Hints() {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <div className="h-fit lg:mt-0 mt-10 w-full lg:w-1/3 ">
      <p className="text-3xl lg:text-2xl text-center font-semibold text-text">
        Hints
      </p>
      <div className=" lg:space-y-2 w-full  grid sm:grid-cols-2 lg:grid-cols-1 mx-auto lg:gap-2 gap-3 my-5">
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
      </div>
      <div
        className={`border-y px-2 space-y-4 border-accent w-full sm:w-1/2 mx-auto lg:w-full transition-all duration-200 py-2 bg-secondary-950 h-${
          isOpen ? "60" : "14"
        } overflow-hidden`}
      >
        <h2 className=" text-2xl xs:text-3xl lg:text-2xl text-text text-center font-semibold">
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
