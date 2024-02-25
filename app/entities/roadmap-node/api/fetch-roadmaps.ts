"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { RoadmapNode } from "..";

type RoadmapNodeResponse = {
  data: RoadmapNode[];
};

export const fetchRoadmaps = async (): Promise<RoadmapNode[]> => {
	try{
  const response: RoadmapNodeResponse = await axiosWithAuth(`/roadmaps/all`);

  return response.data;
	} catch (err) {
		console.log(err);
		throw err
	}
};
