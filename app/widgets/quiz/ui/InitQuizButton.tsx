"use client";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";
import useQuizStorage from "../storage/quiz-storage";

interface InitLessonButtonProps {
  roadmapId: string;
  isLoading: boolean;
}

export default function InitLessonButton({
  roadmapId,
  isLoading,
}: InitLessonButtonProps) {
  const initQuiz = useQuizStorage((state) => state.initQuiz);

  return (
    <Button
      aria-disabled={isLoading}
      disabled={isLoading}
      className="absolute top-[45%] gap-2 flex"
      onClick={async () => {
        await initQuiz(roadmapId);
      }}
      size="lg"
    >
      <Power strokeWidth={3} />
      <p>Start this quiz</p>
    </Button>
  );
}
