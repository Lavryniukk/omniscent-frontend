import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export function fetchCopyTemplate(id: string): void {
  try {
    void axiosWithAuth({
      method: "POST",
      url: `/templates/copy/${id}`,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
