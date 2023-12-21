"use server";
import { FormState } from "../types/FormProps";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

const sendData = async (data: FormState) => {
  try {
    await axiosWithAuth({
      url: "/roadmaps/",
      data: { title: data.inputData },
      method: "POST",
    });
  } catch (err) {
    console.log("Error POST /users/me/roadmaps", err);
    return false;
  }
};

export default sendData;
