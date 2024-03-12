"use server";
import { axiosWithAuth } from "@/app/shared/config/";
import { AxiosResponse } from "axios";

type fetchQuizInitArgs = {
  quizId: string;
  roadmapId: string;
};

export async function fetchInitQuiz(
  data: fetchQuizInitArgs
): Promise<AxiosResponse<unknown>> {
  const { quizId, roadmapId } = data;

  try {
    return await axiosWithAuth({
      url: `/quizzes/${quizId}/init`,
      method: "POST",
      data: {
        roadmapId,
      },
    });
  } catch (error) {
    console.error(`Error with POST /quizzes/${quizId}/init`, error);
    throw error;
  }
}
