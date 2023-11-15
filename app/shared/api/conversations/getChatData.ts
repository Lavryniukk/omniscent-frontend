"use server";
import { axiosWithAuth } from "../../config/axiosConfig";
import Conversation from "../../entities/Conversation";

export const getChatData = async (
  id: string
): Promise<Conversation | undefined> => {
  try {
    const response = await axiosWithAuth({
      method: "GET",
      url: `http://localhost:8000/api/users/me/conversations/${id}`,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
