"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import RoadmapInterface from "@/app/shared/entities/Roadmap";

export let fetchProjects = async (): Promise<
  RoadmapInterface[] | [] | undefined
> => {
  try {
    const response = await axiosWithAuth({
      method: "GET",
      url: `${process.env.SERVER_URL}/api/users/me/roadmaps`,
    });

    return await response.data;
  } catch (e) {
    console.log("Error", e);
  }
};
