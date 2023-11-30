import { axiosWithAuth } from "../../config/axiosConfig";

export default async function toggleIsCompleted(
  roadmap_id: string,
  tech_title: string
) {
  try {
    await axiosWithAuth({
      url: `/users/me/roadmaps/${roadmap_id}/${tech_title}/complete`,
    });
  } catch (e) {
    console.error(
      `Error with PATCH /users/me/roadmaps/${roadmap_id}/${tech_title}/complete`,
      e
    );
  }
}
