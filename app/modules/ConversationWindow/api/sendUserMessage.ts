"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { getAccessToken } from "@auth0/nextjs-auth0";
export default async function sendUserMessage(
  content: string,
  conversation_id: string
) {
  try {
    const { accessToken } = await getAccessToken();
    const res = await axiosWithAuth({
      url: `/users/me/conversations/${conversation_id}/messages`,
      method: "PUT",
      data: {
        role: "user",
        content: content,
      },
    });
    if (res.status === 200) {
      return accessToken as string;
    }
  } catch (error) {
    console.error(
      `Error with PUT /users/me/conversations/${conversation_id}/messages`,
      error
    );
  }
}
