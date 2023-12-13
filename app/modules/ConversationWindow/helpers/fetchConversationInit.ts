"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function fetchConversationInit(
  conversationId: string | undefined,
  userRoadmapId: string | undefined,
  noteTitle: string | undefined,
  language: string | undefined
) {
  if (
    conversationId === undefined ||
    userRoadmapId === undefined ||
    noteTitle === undefined ||
    language === undefined
  ) {
    throw new Error("Params cannot be undefined");
  }
  noteTitle?.replaceAll("%26", "&");

  try {
    axiosWithAuth({
      url: `/users/me/conversations/${conversationId}/init`,
      method: "POST",
      data: {
        conversationId: conversationId,
        userRoadmapId: userRoadmapId,
        nodeTitle: noteTitle,
        language: language,
      },
    });
    // return "inited";
  } catch (error) {
    console.error(
      `Error with POST /users/me/conversations/${conversationId}/init`,
      error
    );
  }
}
