"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import listenForUpdates from "./listenToEvent";
import { getAccessToken } from "@auth0/nextjs-auth0";
export default async function initConversation(
  conversation_id: string,
  user_roadmap_id: string,
  node_title: string
) {
  console.log("this", process.env.SERVER_URL);

  node_title = node_title.replaceAll("%20", " ");
  const { accessToken } = await getAccessToken();
  try {
    await axiosWithAuth({
      url: `/users/me/conversations/${conversation_id}/init`,
      method: "POST",
      data: { user_roadmap_id: user_roadmap_id, node_title: node_title },
    });
    listenForUpdates(conversation_id, accessToken as string);
  } catch (error) {
    console.error(error);
  }
}
