"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";

const fetchDelete = async (roadmapId: string) => {
  try {
    const token = await getAccessToken();

    await axios({
      method: "DELETE",
      url: `https://cleverize.onrender.com/api/users/me/roadmaps/:${roadmapId}`,
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export default fetchDelete;
