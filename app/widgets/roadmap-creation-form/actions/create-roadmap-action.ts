"use server";
import { fetchCreateRoadmap } from "@/app/entities/roadmap-node/api";
import { RoadmapSize } from "@/app/shared/types";

export async function createRoadmapAction(
  state: boolean,
  formData: FormData
): Promise<boolean> {
  try {
    const title = formData.get("title") as string;
    const size = formData.get("size") as RoadmapSize;
    console.log(title, size);

    // throw new Error();

    await fetchCreateRoadmap({ title, size });
    // await new Promise((res, rej) =>
    //   setTimeout(() => {
    //     return res(true);
    //   }, 10000)
    // );
    return true;
  } catch (err) {
    console.error("Error in createRoadmapAction", err);
    return false;
  }
}
