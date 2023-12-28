"use server";
import { axiosWithAuth } from "../../config/axiosConfig";
import { Conversation } from "../../entities";

type fetchConversationDataDto = {
  data: Conversation;
};

export const getConversationData = async (
  id: string
): Promise<Conversation | undefined> => {
  try {
    const response: fetchConversationDataDto = await axiosWithAuth({
      method: "GET",
      url: `/users/me/conversations/${id}`,
    });
    return response.data;
  } catch (e) {
    console.log(`Error with GET /users/me/conversations/${id}`, e);
    return undefined;
  }
};
