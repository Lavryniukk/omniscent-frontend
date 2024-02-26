"use client";
import Button from "@/app/shared/ui/buttons/Button";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import { useUser } from "@clerk/nextjs";
import { Power } from "lucide-react";

interface InitLessonButtonProps {
  roadmapId: string;
}

export default function InitLessonButton({ roadmapId }: InitLessonButtonProps) {
  const { user, isLoaded } = useUser();

  const initLesson = useLessonStorage((state) => state.initLesson);

  return (
    <Button
      disabled={!isLoaded}
      className="absolute top-[45%] gap-2 flex"
      callback={() => {
        isLoaded &&
          void initLesson(roadmapId, user?.unsafeMetadata.language as string);
      }}
      size="lg"
    >
      <Power strokeWidth={3} />
      <p>Start this lesson</p>
    </Button>
  );
}
