"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import Roadmap from "@/app/shared/entities/Roadmap";

export let fetchProjects = async (): Promise<Roadmap[] | [] | undefined> => {
  try {
    const response = await axiosWithAuth({
      method: "GET",
      url: `/users/me/roadmaps`,
    });
    return await response.data;
  } catch (e) {
    console.log("Error", e);
  }
};
