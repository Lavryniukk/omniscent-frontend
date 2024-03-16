"use server";
import { fetchCreateRoadmap } from "@/app/entities/roadmap-node/api";
import { RoadmapSize } from "@/app/shared/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRoadmapAction(
  _: boolean,
  formData: FormData
): Promise<boolean> {
  try {
    const title = formData.get("title") as string;
    const size = formData.get("size") as RoadmapSize;
    console.log(title, size);

    await fetchCreateRoadmap({ title, size });
  } catch (err) {
    console.error("Error in createRoadmapAction", err);
    return false;
  }
  //INFO: revalidatePath is used to delete the cache of the given path, so Next doesn't store it, and we can rerender it
  revalidatePath("/workspace");
  redirect("/workspace");
}
