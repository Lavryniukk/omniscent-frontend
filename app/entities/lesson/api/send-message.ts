"use server";
import { axiosWithAuth } from "@/app/shared/config/";

type fetchSendMessageArgs = {
  content: string;
  lessonId: string;
  roadmapId: string;
};

export async function fetchSendMessage(
  data: fetchSendMessageArgs
): Promise<unknown> {
  const { content, lessonId, roadmapId } = data;
  try {
    return await axiosWithAuth({
      url: `/lessons/${lessonId}/messages`,
      method: "PUT",
      data: {
        roadmapId,
        content,
      },
    });
  } catch (error) {
    throw error;
  }
}
