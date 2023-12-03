"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function fetchConversationInit(
  conversationId: string,
  userRoadmapId: string,
  noteTitle: string,
  language: string
) {
  noteTitle = noteTitle.replaceAll("%26", "&");

  try {
    const res = await axiosWithAuth({
      url: `/users/me/conversations/${conversationId}/init`,
      method: "POST",
      data: {
        conversationId: conversationId,
        userRoadmapId: userRoadmapId,
        nodeTitle: noteTitle,
        language: language,
      },
    });
    return "inited";
  } catch (error) {
    console.error(
      `Error with POST /users/me/conversations/${conversationId}/init`,
      error
    );
  }
}
