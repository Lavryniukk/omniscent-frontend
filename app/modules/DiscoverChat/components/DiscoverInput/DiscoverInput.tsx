"use client";

import { useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import useDiscoverChat from "../../storage/DiscoverChatStorage";

export default function DiscoverInput() {
  const { userInputData, setInputData } = useDiscoverChat();
  const [isDisabled, setisDisabled] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
    const textarea = textareaRef.current;
    if (textarea) {
      !e.target.value && (textarea.style.height = `70px`);

      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    setInputData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDisabled) {
      return;
    }

    console.log(userInputData);
  };
  return (
    <form
      className="w-11/12 box-border h-fit absolute bottom-5 bg-secondary left-[calc((100%-91.6%)/2)] rounded-xl flex items-center overflow-visible"
      onSubmit={(e) => handleSubmit(e)}
    >
      <textarea
        ref={textareaRef}
        className={`w-full h-[70px] box-border bg-secondary rounded-xl p-5 pr-16 aspect-none placeholder:text-lg text-accent text-lg
         focus:outline-none focus:bg-secondary resize-none relative max-h-[200px] overflow-y-scroll `}
        placeholder="Send a message"
        onChange={(e) => handleInput(e)}
      />
      <button
        className={`p-2 ${
          isDisabled ? "bg-secondary cursor-default" : "bg-accent"
        } rounded-lg h-fit flex justify-center items-center  absolute right-4 bottom-[13px]`}
        type="submit"
      >
        <BiSolidSend
          className={`w-[24px] h-[24px] ${
            isDisabled ? "text-accent" : "text-secondary"
          }`}
        />
      </button>
    </form>
  );
}
