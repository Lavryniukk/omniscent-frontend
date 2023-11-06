import { FormState } from "../types/FormProps";
import { getAccessToken } from "@auth0/nextjs-auth0";

const sendData = async ({ data }: { data: FormState }) => {
  const { accessToken } = await getAccessToken();
  try {
    let rawRes = await fetch("/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: data.inputData, type: data.selectData }),
    });

    const parsedRes = await rawRes.json();

    if (rawRes.ok) {
      console.log(parsedRes);
    } else {
      console.log("Failed to fetch");
    }
  } catch (err) {
    console.log(err);
  }
};

export default sendData;
