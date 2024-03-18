import { useEffect, useRef } from "react";
import { SendHorizontal } from "lucide-react";
import useQuizStorage from "@/app/widgets/quiz/storage/quiz-storage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function QuizInput({ roadmapId }: { roadmapId: string }) {
  const {
    userInputData,
    setInputData,
    isLocked,
    lock,
    unlock,
    addUserMessage,
  } = useQuizStorage();

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
      setInputData("");
    }
  };

  return (
    <form
      className="border rounded-lg  mb-5 w-[clamp(300px,30vw,800px)] relative h-fit flex justify-center items-center "
      onSubmit={handleSubmit}
    >
      <Textarea
        className="w-full flex items-center  bg-background/80 overflow-y-auto max-h-60  min-h-[60px] justify-center  box-border    rounded-2xl p-4 pr-16  placeholder:text-lg  text-lg  resize-none "
        placeholder="Ask a question..."
        rows={1}
        value={userInputData}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant={"ghost"}
        size={"icon"}
        aria-disabled={isLocked}
        className={`p-2 absolute  rounded-lg h-fit flex justify-center items-center right-7`}
        type="submit"
      >
        <SendHorizontal
          className={`w-[24px] h-[24px] ${
            isLocked ? "text-muted-foreground" : "text-foreground"
          }`}
        />
      </Button>
    </form>
  );
}
