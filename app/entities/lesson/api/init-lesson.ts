"use server";
import { axiosWithAuth } from "@/app/shared/config/";

type fetchLessonInitArgs = {
  lessonId: string;
  roadmapId: string;
  language: string;
};

export function fetchInitLesson(data: fetchLessonInitArgs): void {
  const { lessonId, roadmapId: roadmap_id, language } = data;

  try {
    void axiosWithAuth({
      url: `/lessons/${lessonId}/init`,
      method: "POST",
      data: {
        roadmap_id,
        language,
      },
    });
  } catch (error) {
    console.error(`Error with POST /lessons/${lessonId}/init`, error);
    throw error;
  }
}
