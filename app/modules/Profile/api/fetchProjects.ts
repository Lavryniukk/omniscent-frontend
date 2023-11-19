"use server";

import { Project } from "../types/project";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export let fetchProjects = async (): Promise<Project[] | [] | undefined> => {
  try {
    let response = await axiosWithAuth({
      url: "/users/me/roadmaps",
    });
    return response.data;
  } catch (e) {
    console.log("Error with GET /users/me/roadmaps", e);
  }
};
