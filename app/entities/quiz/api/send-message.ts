"use server";
import { axiosWithAuth } from "@/app/shared/config/";

type fetchSendMessageArgs = {
  content: string;
  quizId: string;
  userRoadmapId: string;
};

export default function fetchSendUserMessage(data: fetchSendMessageArgs): void {
  const { content, quizId, userRoadmapId } = data;
  try {
    void axiosWithAuth({
      url: `/quizzes/${quizId}/messages`,
      method: "PUT",
      data: {
        role: "user",
        userRoadmapId,
        content,
      },
    });
  } catch (error) {
    console.error(`Error with PUT /quizzes/${quizId}/messages`, error);
    throw error;
  }
}
