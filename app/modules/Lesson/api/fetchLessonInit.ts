"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function fetchLessonInit(body: {
  lessonId: string | undefined;
  userRoadmapId: string | undefined;
  language: string | undefined;
}) {
  const { lessonId, userRoadmapId, language } = body;
  if (
    lessonId === undefined ||
    userRoadmapId === undefined ||
    language === undefined
  ) {
    throw new Error("Params cannot be undefined");
  }
  try {
    await axiosWithAuth({
      url: `/lessons/${lessonId}/init`,
      method: "POST",
      data: body,
    });
    return "inited";
  } catch (error) {
    console.error(`Error with POST /lessons/${lessonId}/init`, error);
  }
}
