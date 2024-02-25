"use server";
import { axiosWithAuth } from "@/app/shared/config/";

type fetchSendMessageArgs = {
  content: string;
  lesson_id: string;
  userRoadmapId: string;
};

export function fetchSendMessage(data: fetchSendMessageArgs): void {
  const { content, lesson_id, userRoadmapId } = data;
  try {
    void axiosWithAuth({
      url: `/lessons/${lesson_id}/messages`,
      method: "PUT",
      data: {
        role: "user",
        userRoadmapId,
        content,
      },
    });
  } catch (error) {
    console.error(`Error with PUT /lessons/${lesson_id}/messages`, error);
    throw error;
  }
}
