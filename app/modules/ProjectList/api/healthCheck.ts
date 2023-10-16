"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { getAccessToken } from "@auth0/nextjs-auth0";

export let health = async () => {
  const session = await getSession();
  const { accessToken } = await getAccessToken();
  // console.log(accessToken);
  const token = session?.idToken;
  console.log(token);
  try {
    let response = await fetch("http://localhost:5000/", {
      headers: {
        authorization: `Bearer ${session?.idToken}`,
      },
    });

    let parsed = await response.json();

    console.log(parsed);
    return parsed;
  } catch (e) {
    console.log("PIzdec: ", e);
  }
};
