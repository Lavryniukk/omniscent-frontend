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

  return await axiosWithAuth({
    url: `/quizzes/${quizId}/init`,
    method: "POST",
    data: {
      roadmapId,
    },
  });
}
("65f1cd7c7c94ac29a2d7e34a lesson");
