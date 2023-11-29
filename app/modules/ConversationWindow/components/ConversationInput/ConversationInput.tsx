"use client";

import { useEffect, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import useConversationStorage from "../../storage/ConversationStorage";

export default function ConversationInput({
  conversation_id,
}: {
  conversation_id: string;
}) {
  const { userInputData, setInputData, locked, setLocked, addUserMessage } =
    useConversationStorage();

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

    addUserMessage(userInputData, conversation_id);

    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = `70px`;

      // textarea.style.height = `${textarea.scrollHeight}px`;

      textarea.value = "";
    }
  };

  return (
    <form
      className="w-full  box-border absolute bottom-0 z-10 p-3  rounded-xl flex items-center overflow-visible mx-auto "
      onSubmit={(e) => handleSubmit(e)}
    >
      <textarea
        ref={textareaRef}
        className={`w-full h-[70px] box-border border-accent border bg-opacity-70 backdrop-blur-sm  bg-secondary  rounded-xl p-5 pr-16 aspect-none placeholder:text-lg text-accent text-lg
           focus:outline-none focus:border-text resize-none max-h-[200px] overflow-y-scroll`}
        placeholder="Send a message"
        autoFocus
        onChange={(e) => handleInput(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
          }
        }}
      />
      <button
        className={`p-2 absolute ${
          locked ? " cursor-default pointer-events-none" : "bg-accent"
        } rounded-lg h-fit flex justify-center items-center right-7`}
        type="submit"
      >
        <BiSolidSend
          className={`w-[24px] h-[24px] ${
            locked ? "text-accent" : "text-secondary"
          }`}
        />
      </button>
    </form>
  );
}
