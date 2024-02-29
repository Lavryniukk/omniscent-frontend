'use server'
import { axiosWithAuth } from "@/app/shared/config/";

type fetchSendMessageArgs = {
  content: string;
  lesson_id: string;
  roadmapId: string;
};

export async function fetchSendMessage(data: fetchSendMessageArgs): Promise<unknown> {
  const { content, lesson_id, roadmapId } = data;
  try {
    return await axiosWithAuth({
      url: `/lessons/${lesson_id}/messages`,
      method: "PUT",
      data: {
        role: "user",
        roadmapId,
        content,
      },
    });
  } catch (error) {
    console.error(`Error with PUT /lessons/${lesson_id}/messages`, error);
    throw error;
  }
}
