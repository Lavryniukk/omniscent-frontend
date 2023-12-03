"use client";

import { useEffect, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import useConversationStorage from "../../storage/ConversationStorage";

export default function ConversationInput({
  conversation_id,
  roadmapId,
}: {
  conversation_id: string;
  roadmapId: string;
}) {
  const {
    userInputData,
    setInputData,
    isLocked,
    lock,
    unlock,
    addUserMessage,
  } = useConversationStorage();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    !userInputData ? lock() : unlock();
  }, [userInputData, lock, unlock]);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // const textarea = textareaRef.current;
    // if (textarea) {
    //   !e.target.value && (textarea.style.height = `72px`);

    //   textarea.style.height = `${textarea.scrollHeight + 2}px`;
    // }

    setInputData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addUserMessage(userInputData, conversation_id, roadmapId);

    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = `72px`;

      // textarea.style.height = `${textarea.scrollHeight}px`;

      textarea.value = "";
    }
  };

  return (
    <form
      className="w-full lg:w-3/4 relative justify-center h-fit box-border  px-5 mb-5  bottom-0 z-10   rounded-xl flex items-center "
      onSubmit={(e) => !isLocked && handleSubmit(e)}
    >
      <textarea
        ref={textareaRef}
        className={`w-full flex items-center justify-center h-[72px] box-border border-accent border bg-opacity-70 backdrop-blur-sm  bg-secondary  rounded-xl p-5 pr-16 aspect-none placeholder:text-lg text-accent text-lg
           focus:outline-none focus:border-text resize-none max-h-[200px] overflow-y-auto  `}
        placeholder="Send a message"
        autoFocus
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !isLocked) {
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
          }
        }}
      />
      <button
        className={`p-2 absolute ${
          isLocked ? " cursor-default pointer-events-none" : "bg-accent"
        } rounded-lg h-fit flex justify-center items-center right-7`}
        type="submit"
      >
        <BiSolidSend
          className={`w-[24px] h-[24px] ${
            isLocked ? "text-accent" : "text-secondary"
          }`}
        />
      </button>
    </form>
  );
}
