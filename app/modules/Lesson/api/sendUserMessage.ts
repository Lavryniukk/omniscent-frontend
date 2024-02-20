"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function sendUserMessage(
  content: string,
  lesson_id: string,
  userRoadmapId: string
) {
  try {
    await axiosWithAuth({
      url: `/lessons/${lesson_id}/messages`,
      method: "PUT",
      data: {
        role: "user",
        userRoadmapId,
        content,
      },
    });
    return "sent";
  } catch (error) {
    console.error(`Error with PUT /lessons/${lesson_id}/messages`, error);
  }
}
