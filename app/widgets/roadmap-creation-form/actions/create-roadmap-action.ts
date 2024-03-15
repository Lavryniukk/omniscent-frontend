"use server";
import { fetchCreateRoadmap } from "@/app/entities/roadmap-node/api";
import { RoadmapSize } from "@/app/shared/types";

export async function createRoadmapAction(formData: FormData) {
  const title = formData.get("title") as string;
  const size = formData.get("size") as RoadmapSize;
  console.log(title, size);

  return await fetchCreateRoadmap({ title, size });
}
