"use client";

import { useEffect, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import useDiscoverChat from "../../storage/DiscoverChatStorage";

export default function DiscoverInput() {
  const { userInputData, setInputData, locked, setLocked } = useDiscoverChat();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      !e.target.value && (textarea.style.height = `70px`);

      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setInputData(e.target.value);
  };

  useEffect(() => {
    if (userInputData) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  }, [userInputData, setLocked]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (locked) {
      return;
    }
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `70px`;

      textarea.style.height = `${textarea.scrollHeight}px`;

      textarea.value = "";
    }
  };

  return (
    <div className="w-full absolute bottom-0 z-10 p-3 bg-background">
      <form
        className="w-full box-border h-fit bg-secondary rounded-xl flex items-center overflow-visible mx-auto relative"
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          ref={textareaRef}
          className={`w-full h-[70px] box-border bg-secondary rounded-xl p-5 pr-16 aspect-none placeholder:text-lg text-accent text-lg
           focus:outline-none focus:bg-secondary resize-none max-h-[200px] overflow-y-scroll  `}
          placeholder="Send a message"
          onChange={(e) => handleInput(e)}
        />
        <button
          className={`p-2 absolute ${
            locked ? "bg-secondary cursor-default" : "bg-accent"
          } rounded-lg h-fit flex justify-center items-center right-4 bottom-4  `}
          type="submit"
        >
          <BiSolidSend
            className={`w-[24px] h-[24px] ${
              locked ? "text-accent" : "text-secondary"
            }`}
          />
        </button>
      </form>
    </div>
  );
}
