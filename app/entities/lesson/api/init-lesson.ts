import { axiosWithAuth } from "@/app/shared/config/";

type fetchLessonInitArgs = {
  lessonId: string;
  roadmapId: string;
  language: string;
};

export async function fetchInitLesson(data: fetchLessonInitArgs): Promise<unknown> {
  const { lessonId, roadmapId: roadmap_id, language } = data;

  try {
    return await axiosWithAuth({
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
