"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { RoadmapNode } from "..";
import { AxiosResponse } from "axios";

export async function fetchRoadmap(id: string): Promise<RoadmapNode> {
  const response: AxiosResponse<RoadmapNode> = await axiosWithAuth(
    `/roadmaps/subtree/${id}`
  );
  return response.data;
}
