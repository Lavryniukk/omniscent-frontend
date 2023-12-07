"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import Roadmap from "@/app/shared/entities/Roadmap";

export default async function fetchRoadmap(id: string) {
  let response = await axiosWithAuth({
    method: "GET",
    url: `/users/me/roadmaps/${id}`,
  });
  const roadmaps = (await response.data) as Roadmap;
  return roadmaps;
}
