import { axiosWithAuth } from "@/app/shared/config";
import { FeedbackFormProps } from "../types/props";

type fetchFeedbackDto = {
  feedback: string;
  rating: number;
  roadmap_id?: string;
  lesson_id?: string;
};

export default async function fetchFeedbackAction(
  rating: number,
  id: FeedbackFormProps,
  formData: FormData
): Promise<void> {
  const feedback = formData.get("feedback") as string;

  try {
    const data: fetchFeedbackDto = {
      feedback,
      rating,
    };

    if (id.lessonId) {
      data["lesson_id"] = id.lessonId;
    }
    if (id.roadmapId) {
      data["roadmap_id"] = id.roadmapId;
    }

    const res = await axiosWithAuth({
      method: "POST",
      url: "/feedback",
      data,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
