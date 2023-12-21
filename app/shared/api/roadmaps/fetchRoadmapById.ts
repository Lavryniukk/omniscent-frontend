"use server";

import { axiosWithAuth } from "../../config/axiosConfig";
import RoadmapNode from "../../entities/Roadmap";

export async function fetchRoadmap(id: string): Promise<RoadmapNode> {
  try {
    let response: { data: RoadmapNode } = await axiosWithAuth({
      method: "GET",
      url: `/roadmaps/subtree/${id}`,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching roadmap:", error);
    throw error;
  }
}
