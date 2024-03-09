"use server";
import { axiosWithAuth } from "@/app/shared/config/axios-with-auth";

export async function fetchCopyTemplate(id: string): Promise<string> {
  try {
    await axiosWithAuth({
      method: "POST",
      url: `/templates/copy/${id}`,
    });
    return "Success! Template copied.";
  } catch (error) {
    console.error(error);
    return "Error! Could't copy template.";
  }
}
