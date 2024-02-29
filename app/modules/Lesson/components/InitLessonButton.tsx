"use client";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Power } from "lucide-react";

interface InitLessonButtonProps {
  roadmapId: string;
}

export default function InitLessonButton({ roadmapId,  }: InitLessonButtonProps) {
  const { user, isLoaded } = useUser();

  const initLesson = useLessonStorage((state) => state.initLesson);
  
  const language = user?.unsafeMetadata.language as string;
  
  return (
    <Button
      disabled={!isLoaded}
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
