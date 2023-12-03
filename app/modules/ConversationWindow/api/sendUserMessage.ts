"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function sendUserMessage(
  content: string,
  conversation_id: string,
  userRoadmapId: string
) {
  try {
    console.log(
      "id:",
      conversation_id,
      "rdid:",
      userRoadmapId,
      "content:",
      content
    );

    await axiosWithAuth({
      url: `/users/me/conversations/${conversation_id}/messages`,
      method: "PUT",
      data: {
        role: "user",
        userRoadmapId,
        content,
      },
    });
    return "sent";
  } catch (error) {
    console.error(
      `Error with PUT /users/me/conversations/${conversation_id}/messages`,
      error
    );
  }
}
