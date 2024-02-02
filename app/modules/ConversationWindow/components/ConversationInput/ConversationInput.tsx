import { useEffect, useRef } from "react";
import useConversationStorage from "../../storage/ConversationStorage";
import { SendHorizontal } from "lucide-react";

export default function ConversationInput({
  roadmapId,
}: {
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

  useEffect(() => {
    !userInputData ? lock() : unlock();
  }, [userInputData, lock, unlock]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight + 1.5}px`;
    setInputData(e.target.value);
  };

  let handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isLocked) {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isLocked) {
      e.preventDefault();
      addUserMessage(roadmapId);
      setInputData(" ");
    }
  };

  return (
    <form
      className="w-3/4 xl:w-1/2 relative justify-center dark:bg-transparent max-w-[850px] max-h-60 h-fit box-border  mb-5 bottom-0 z-10 flex items-center"
      onSubmit={handleSubmit}
    >
      <textarea
        className="w-full flex items-center overflow-y-auto max-h-60 dark:border-azure-700  dark:bg-azure-900/50 min-h-[60px] justify-center shadow-xl dark:border box-border  bg-opacity-70 backdrop-blur-sm  rounded-2xl p-4 pr-16 aspect-none placeholder:text-lg dark:text-azure-200 text-lg focus:ring-0 focus:outline-none transition-all duration-300 dark:shadow-none dark:focus:shadow-azure-700 dark:focus:shadow-lg  resize-none "
        placeholder="Ask a question..."
        rows={1}
        value={userInputData}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button
        className={`p-2 absolute ${
          isLocked ? " cursor-default pointer-events-none" : "bg-accent"
        } rounded-lg h-fit flex justify-center items-center right-7`}
        type="submit"
      >
        <SendHorizontal
          className={`w-[24px] h-[24px] ${
            isLocked ? "text-accent" : "text-secondary"
          }`}
        />
      </button>
    </form>
  );
}
