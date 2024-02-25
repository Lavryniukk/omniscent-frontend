"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { RoadmapNode } from "..";

type fetchRoadmapDto = {
  data: RoadmapNode;
};

export async function fetchRoadmap(id: string): Promise<RoadmapNode> {
  try {
    const response: fetchRoadmapDto = await axiosWithAuth(
      `/roadmaps/subtree/${id}`
    );
    return response.data;
  } catch (e) {
    console.log(`Error with GET /roadmaps/subtree/${id}`, e);
    throw e;
  }
}
