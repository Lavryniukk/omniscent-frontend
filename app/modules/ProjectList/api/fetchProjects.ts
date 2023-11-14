"use server";

import RoadmapInterface from "@/app/shared/entities/Roadmap";
import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";

export let fetchProjects = async (): Promise<
  RoadmapInterface[] | [] | undefined
> => {
  try {
    const { accessToken } = await getAccessToken();
    console.log(accessToken);
    const response = await axios({
      method: "GET",
      url: `${process.env.SERVER_URL}/api/users/me/roadmaps`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await response.data;
  } catch (e) {
    console.log("Error", e);
  }
};
