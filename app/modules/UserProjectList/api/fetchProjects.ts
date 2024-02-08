"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import Roadmap from "@/app/shared/entities/Roadmap";


export let fetchProjects = async (): Promise<Roadmap[]> => {
  const response: { data: Array<Roadmap> } = await axiosWithAuth({
    method: "GET",
    url: `/roadmaps/all`,
  });

  return response.data;
};
