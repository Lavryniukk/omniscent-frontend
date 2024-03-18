"use server";
import { axiosWithAuth } from "@/app/shared/config/axios-with-auth";

export async function fetchCopyTemplate(id: string): Promise<boolean> {
  try {
    await axiosWithAuth({
      method: "POST",
      url: `/templates/copy/${id}`,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
