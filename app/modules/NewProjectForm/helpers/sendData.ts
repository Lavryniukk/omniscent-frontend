"use server";
import axios from "axios";
import { FormState } from "../types/FormProps";
import { getAccessToken } from "@auth0/nextjs-auth0";

const sendData = async (data: FormState) => {
  const { accessToken } = await getAccessToken();
  try {
    await axios({
      url: "https://cleverize.onrender.com/api/users/me/roadmaps",
      data: { title: data.inputData },
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendData;
