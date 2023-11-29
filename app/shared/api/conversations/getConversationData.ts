"use server";
import { axiosWithAuth } from "../../config/axiosConfig";
import Conversation from "../../entities/Conversation";

export const getConversationData = async (
  id: string
): Promise<Conversation | undefined> => {
  try {
    const response = await axiosWithAuth({
      method: "GET",
      url: `/users/me/conversations/${id}`,
    });
    return response.data as Conversation;
  } catch (e) {
    console.log(`Error with GET /users/me/conversations/${id}`, e);
  }
};
