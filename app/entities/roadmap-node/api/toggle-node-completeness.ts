import { axiosWithAuth } from "@/app/shared/config";

type toggleIsCompletedArgs = {
  roadmap_id: string;
  tech_title: string;
};

export function toggleRoadmapCompleteness(data: toggleIsCompletedArgs): void {
  const { roadmap_id, tech_title } = data;
  try {
    void axiosWithAuth(
      `/users/me/roadmaps/${roadmap_id}/${tech_title}/complete`
    );
  } catch (e) {
    console.error(
      `Error with PATCH /users/me/roadmaps/${roadmap_id}/${tech_title}/complete`,
      e
    );
    throw e;
  }
}
