"use server";
import { FormState } from "../types/FormProps";
import { getAccessToken } from "@auth0/nextjs-auth0";

const sendData = async (data: FormState) => {
  const { accessToken } = await getAccessToken();
  try {
    let rawRes = await fetch(
      "https://cleverize.onrender.com/api/users/me/roadmaps",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: data.inputData }),
      }
    );

    const parsedRes = await rawRes.json();
    console.log(parsedRes);
    return parsedRes;
  } catch (err) {
    console.log(err);
  }
};

export default sendData;
