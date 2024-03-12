"use server";
import { axiosWithAuth } from "@/app/shared/config/";

type fetchLessonInitArgs = {
  lessonId: string;
  roadmapId: string;
};

export async function fetchInitLesson(
  data: fetchLessonInitArgs
): Promise<unknown> {
  const { lessonId, roadmapId: roadmap_id } = data;

  try {
    const res = await axiosWithAuth({
      url: `/lessons/${lessonId}/init`,
      method: "POST",
      data: {
        roadmap_id,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error(`Error with POST /lessons/${lessonId}/init`, error);
    throw error;
  }
}
