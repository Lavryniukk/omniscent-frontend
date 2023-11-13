"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";
import { Project } from "../types/project";

export let fetchProjects = async (): Promise<Project[] | [] | undefined> => {
  try {
    const { accessToken } = await getAccessToken();

    let response = await axios({
      method: "GET",
      url: `https://cleverize.onrender.com/api/users/me/roadmaps`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (e) {
    console.log("Error", e);
  }
};
