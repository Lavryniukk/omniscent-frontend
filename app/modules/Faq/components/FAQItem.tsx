"use client";

import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
type Props = { question: string; answer: string };

let FAQItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border-x-[1.5px] observe duration-200 transition border-accent font-inter font-light lg:w-4/6 sm:w-5/6  text-text-300 mx-auto ${
        !isOpen ? "h-12" : "sm:h-32 h-36"
      } sm:px-2 px-1 transition-all duration-500 overflow-hidden lg:text-lg sm:text-base text-[13px]`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center mb-4 h-12">
        <div>{question}</div>
        <div className={`${isOpen ? "rotate-180" : "rotate-0"}`}>
          <BsChevronDown />
        </div>
      </div>

      <div
        className={`py-1 ${
          isOpen ? "opacity-80" : "opacity-0"
        } transition-opacity duration-500 text-text font-inter font-extralight`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;
