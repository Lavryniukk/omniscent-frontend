"use client";
import Messages from "./components/Messages/Messages";
import InitLessonButton from "./components/InitLessonButton";
import LessonInput from "./components/LessonInput";
import { useEffect } from "react";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import FeedbackForm from "@/app/components/FeedbackForm/FeedbackForm";
import Button from "@/app/shared/ui/buttons/Button";
import { LessonPageParams } from "@/app/(pages)/workspace/r/[roadmapId]/l/[lessonId]/page";
import useLessonStorage from "@/app/shared/stores/lessonStorage";

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
      className={`w-full flex items-center flex-1 flex-col h-full border-accent bg-azure-50/80 dark:bg-azure-50/10 relative overflow-hidden `}
    >
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center">
        <p>{lesson?.title}</p>
      </div>
      <div className="flex w-full flex-col h-full max-h-full overflow-y-auto">
        <Messages />
      </div>
      {isEmpty && <InitLessonButton roadmapId={roadmapId} />}

      {!isEmpty && <FeedbackForm lessonId={id} /> && (
        <LessonInput roadmapId={roadmapId} />
      )}
    </div>
  );
}
