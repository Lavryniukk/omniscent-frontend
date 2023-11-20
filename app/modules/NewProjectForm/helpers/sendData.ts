"use server";
import { FormState } from "../types/FormProps";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

const sendData = async (data: FormState) => {
  try {
    await axiosWithAuth({
      url: "/users/me/roadmaps",
      data: { title: data.inputData },
      method: "POST",
    });
  } catch (err) {
    console.log("Error POST /users/me/roadmaps", err);
  }
};

export default sendData;
