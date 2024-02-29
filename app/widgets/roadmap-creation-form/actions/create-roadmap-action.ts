"use server";
import { fetchCreateRoadmap } from "@/app/entities/roadmap-node/api";
import { ROADMAP_SIZE } from "@/app/shared/constants";

export async function createRoadmapAction(formData: FormData) {
  const title = formData.get("title") as string;
  const size = formData.get("size") as ROADMAP_SIZE;
  console.log(title, size);
  return  fetchCreateRoadmap({ title, size });
}
