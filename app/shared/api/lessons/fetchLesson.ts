"use server";
import { axiosWithAuth } from "../../config/axiosConfig";
import { Lesson } from "../../entities";

type fetchLessonDto = {
  data: Lesson;
};

export const fetchLesson = async (
  id: string
): Promise<Lesson | undefined> => {
  try {
    const response: fetchLessonDto = await axiosWithAuth({
      method: "GET",
      url: `/lessons/${id}`,
    });
    return response.data;
  } catch (e) {
    console.log(`Error with GET /lessons/${id}`, e);
    return undefined;
  }
};
