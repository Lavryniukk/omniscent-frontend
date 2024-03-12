"use server";
import { axiosWithAuth } from "@/app/shared/config/";
import { AxiosResponse } from "axios";

type fetchSendMessageArgs = {
  content: string;
  quizId: string;
  roadmapId: string;
};

export async function fetchSendMessage(
  data: fetchSendMessageArgs
): Promise<AxiosResponse<unknown>> {
  const { content, quizId, roadmapId } = data;
  try {
    return await axiosWithAuth({
      url: `/quizzes/${quizId}/messages`,
      method: "PUT",
      data: {
        role: "user",
        roadmapId,
        content,
      },
    });
  } catch (error) {
    console.error(`Error with PUT /quizzes/${quizId}/messages`, error);
    throw error;
  }
}
