"use server";
import { axiosWithAuth } from "@/app/shared/config/";
import { LANGUAGE } from "@/app/shared/constants";

type fetchLessonInitArgs = {
  quizId: string;
  roadmapId: string;
  language: LANGUAGE;
};

export default function fetchQuizInit(data: fetchLessonInitArgs): void {
  const { quizId, roadmapId: roadmap_id, language } = data;

  try {
    void axiosWithAuth({
      url: `/quizzes/${quizId}/init`,
      method: "POST",
      data: {
        roadmap_id,
        language,
      },
    });
  } catch (error) {
    console.error(`Error with POST /quizzes/${quizId}/init`, error);
    throw error
  }
}
