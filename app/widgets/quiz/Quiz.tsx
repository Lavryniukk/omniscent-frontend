"use client";
import { useEffect } from "react";

import FeedbackForm from "@/app/shared/modals/FeedbackForm/FeedbackForm";
import Message from "./ui/Message";
import { fetchQuiz } from "@/app/entities/quiz/api";
import { useQuery } from "@tanstack/react-query";
import useQuizStorage from "./storage/quiz-storage";
import InitQuizButton from "./ui/InitQuizButton";
import QuizInput from "./ui/QuizInput";

export function Quiz({
  params,
}: {
  params: { roadmapId: string; quizId: string };
}) {
  const { roadmapId, quizId } = params;

  const { quiz, setQuiz } = useQuizStorage();
  const { data, isLoading, error } = useQuery({
    queryFn: () => {
      return fetchQuiz(quizId);
    },
    queryKey: ["quiz", quizId],
  });
  useEffect(() => {
    if (data) {
      setQuiz(data);
    }
  }, [quizId, data, setQuiz]);

  const isEmpty = !quiz?.messages?.length;

  return (
    <div
      className={`w-full flex items-center  flex-1 flex-col h-full bg-foreground/[0.10]  relative overflow-hidden `}
    >
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center">
        <p>{quiz?.title}</p>
      </div>
      <div className="flex w-full flex-col h-full max-h-full overflow-y-auto">
        <div
          role="presentation"
          className="overflow-auto w-full py-5 h-auto max-h-full min-w-[350px] flex-col"
        >
          {quiz?.messages?.map((message, index) => {
            return (
              message.role !== "system" && (
                <Message
                  content={message.content}
                  role={message.role}
                  key={index}
                />
              )
            );
          })}
        </div>
      </div>
      {isEmpty && (
        <InitQuizButton isLoading={isLoading} roadmapId={roadmapId} />
      )}

      {!isEmpty && <FeedbackForm lessonId={quizId} /> && (
        <QuizInput roadmapId={roadmapId} />
      )}
    </div>
  );
}
