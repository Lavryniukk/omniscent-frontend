"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { Lesson } from "@/app/entities/lesson";

type fetchLessonDto = {
  data: Lesson;
};

export const fetchLesson = async (id: string): Promise<Lesson | undefined> => {
  try {
    const response: fetchLessonDto = await axiosWithAuth(`/lessons/${id}`);
    return response.data;
  } catch (e) {
    console.log(`Error with GET /lessons/${id}`, e);
    throw e;
  }
};
