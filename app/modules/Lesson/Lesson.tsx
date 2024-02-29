"use client";
import InitLessonButton from "./components/InitLessonButton";
import LessonInput from "./components/LessonInput";
import { useEffect } from "react";

import FeedbackForm from "@/app/shared/modals/FeedbackForm/FeedbackForm";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import Message from "./components/Messages/components/Message";

export default function LessonWindow({
  params,
}: {
  params: { roadmapId: string; id: string };
}) {
  const { lesson, setLesson } = useLessonStorage();
  const { roadmapId, id } = params;
  useEffect(() => {
    setLesson(id);
  }, [id, setLesson]);

  const isEmpty = !lesson?.messages?.length;

  return (
    <div
      className={`w-full flex items-center  flex-1 flex-col h-full bg-foreground/[0.10]  relative overflow-hidden `}
    >
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center">
        <p>{lesson?.title}</p>
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

      {!isEmpty && <FeedbackForm lessonId={id} /> && (
        <LessonInput roadmapId={roadmapId} />
      )}
    </div>
  );
}
