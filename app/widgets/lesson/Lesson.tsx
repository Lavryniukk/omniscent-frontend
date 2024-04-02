"use client";
import InitLessonButton from "./ui/InitLessonButton";
import LessonInput from "./ui/LessonInput";
import { useEffect } from "react";

import FeedbackForm from "@/app/shared/modals/FeedbackForm/FeedbackForm";
import useLessonStorage from "@/app/widgets/lesson/storage/lesson-storage";
import Message from "./ui/Message";
import { useQuery } from "@tanstack/react-query";
import { fetchLesson } from "@/app/entities/lesson/api";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import CreditCostBadge from "@/app/features/credit-cost-badge/CreditCostBadge";
import CreditsCounter from "@/app/features/credits-counter/CreditsCounter";

export function Lesson({
  params,
}: {
  params: { roadmapId: string; id: string };
}) {
  const { lesson, setLesson } = useLessonStorage();
  const { data, isLoading, error } = useQuery({
    queryFn: () => {
      return fetchLesson(params.id);
    },
    queryKey: ["lesson", params.id],
  });
  const { roadmapId, id } = params;
  useEffect(() => {
    if (data) {
      setLesson(data);
    }
  }, [params.id, data, setLesson]);

  const isEmpty = !lesson?.messages?.length;

  return (
    <div
      className={`w-full flex items-center  flex-1 flex-col h-full bg-foreground/[0.10]  relative overflow-hidden `}
    >
      <div className="absolute max-md:hidden left-2 top-2  flex gap-2">
        <CreditsCounter />
        <CreditCostBadge cost={2} />
      </div>
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center">
        {isLoading ? <Skeleton className="w-28 h-6" /> : <p>{lesson?.title}</p>}
      </div>
      <div className="flex w-full flex-col h-full max-h-full overflow-y-auto">
        <div
          role="presentation"
          className="overflow-auto w-full py-5 h-auto max-h-full min-w-[350px] flex-col"
        >
          {lesson?.messages?.map((message, index) => {
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
      {isEmpty && <InitLessonButton roadmapId={roadmapId} />}

      {!isEmpty && (
        <FeedbackForm
          placeholder="This AI-teacher is out of his mind. He told me that..."
          lessonId={id}
        />
      )}

      {!isEmpty && <LessonInput roadmapId={roadmapId} />}
    </div>
  );
}
