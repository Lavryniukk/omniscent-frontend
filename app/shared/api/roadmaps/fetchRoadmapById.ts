"use server";

import { axiosWithAuth } from "../../config/axiosConfig";
import { RoadmapNode } from "../../entities";

export async function fetchRoadmap(id: string): Promise<RoadmapNode> {
  let response: { data: RoadmapNode } = await axiosWithAuth({
    method: "GET",
    url: `/roadmaps/subtree/${id}`,
  });
  return response.data;
}
