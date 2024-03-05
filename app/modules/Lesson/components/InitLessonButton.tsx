"use client";
import { useUser } from "@/app/processes/auth";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

interface InitLessonButtonProps {
  roadmapId: string;
}

export default function InitLessonButton({ roadmapId }: InitLessonButtonProps) {
  const { data: user, isLoading } = useUser();

  const initLesson = useLessonStorage((state) => state.initLesson);

  const language = user?.metadata.language as string;

  return (
    <Button
      disabled={!isLoading}
      className="absolute top-[45%] gap-2 flex"
      onClick={() => {
        initLesson(roadmapId, language);
      }}
      size="lg"
    >
      <Power strokeWidth={3} />
      <p>Start this lesson</p>
    </Button>
  );
}
