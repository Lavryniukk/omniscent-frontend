"use client";
import Button from "@/app/UI/buttons/Button";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import { useUser } from "@clerk/nextjs";

interface InitLessonButtonProps {
  roadmapId: string;
}

export default function InitLessonButton({ roadmapId }: InitLessonButtonProps) {
  const { user, isLoaded } = useUser();

  const initLesson = useLessonStorage((state) => state.initLesson);

  return (
    <div className="absolute top-[45%]">
      <Button
        disabled={!isLoaded}
        callback={async () => {
          isLoaded &&
            initLesson(roadmapId, user?.unsafeMetadata.language as string);
        }}
        size="lg"
      >
        Start learning
      </Button>
    </div>
  );
}
