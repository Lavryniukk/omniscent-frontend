"use server";
import { FormState } from "../types/FormProps";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

const sendData = async (data: FormState) => {
  try {
    const response = await axiosWithAuth({
      url: "/roadmaps/",
      data: { title: data.inputData, size: data.selectData },
      method: "POST",
    });
    return response.data;
  } catch (err) {
    console.log("Error POST /users/me/roadmaps", err);
    return false;
  }
};

export default sendData;
