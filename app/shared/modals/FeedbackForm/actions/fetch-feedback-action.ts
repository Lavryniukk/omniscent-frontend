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
  props: FeedbackFormProps,
  formData: FormData
): Promise<void> {
  
  const feedback = formData.get("feedback") as string;

  try {
    const data: fetchFeedbackDto = {
      feedback,
      rating,
    };

    if ('lessonId' in props) {
      data["lesson_id"] = props.lessonId;
    }
    if ('roadmapId' in props) {
      data["roadmap_id"] = props.roadmapId;
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
