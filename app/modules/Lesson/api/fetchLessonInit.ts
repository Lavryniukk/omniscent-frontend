"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function fetchLessonInit(body: {
  lessonId: string | undefined;
  roadmapId: string | undefined;
  language: string | undefined;
}) {
  const { lessonId, roadmapId, language } = body;

  try {
    return await axiosWithAuth({
      url: `/lessons/${lessonId}/init`,
      method: "POST",
      data: {
        roadmap_id: roadmapId,
        language,
      },
    });
  } catch (error) {
    console.error(`Error with POST /lessons/${lessonId}/init`, error);
  }
}
