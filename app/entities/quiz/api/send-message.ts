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
  console.log("dick", data);
  return await axiosWithAuth({
    url: `/quizzes/${quizId}/messages`,
    method: "PUT",
    data: {
      roadmapId,
      content,
    },
  });
}
