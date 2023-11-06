"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";
import { Project } from "../types/project";

export let fetchProjects = async (): Promise<Project[] | [] | undefined> => {
  try {
    const { accessToken } = await getAccessToken();

    let response = await fetch(
      "https://cleverize.onrender.com/api/users/me/roadmaps",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );
    let parsed = await response.json();
    return parsed;
  } catch (e) {
    console.log("Error", e);
  }
};
