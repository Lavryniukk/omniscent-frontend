"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
export default async function fetchConversationInit(body: {
  conversationId: string | undefined;
  userRoadmapId: string | undefined;
  language: string | undefined;
}) {
  const { conversationId, userRoadmapId, language } = body;
  if (
    conversationId === undefined ||
    userRoadmapId === undefined ||
    language === undefined
  ) {
    throw new Error("Params cannot be undefined");
  }
  console.log("sending init with body:", body);
  try {
    await axiosWithAuth({
      url: `/users/me/conversations/${conversationId}/init`,
      method: "POST",
      data: body,
    });
    return "inited";
  } catch (error) {
    console.error(
      `Error with POST /users/me/conversations/${conversationId}/init`,
      error
    );
  }
}
