"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { Quiz } from "@/app/entities/quiz";

type fetchQuizDto = {
  data: Quiz;
};

export const fetchLesson = async (id: string): Promise<Quiz> => {
  try {
    const response: fetchQuizDto = await axiosWithAuth(`/quizzes/${id}`);
    return response.data;
  } catch (e) {
    console.log(`Error with GET /quizzes/${id}`, e);
    throw e;
  }
};
