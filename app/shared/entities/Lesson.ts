export type LessonMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type Lesson = {
  _id: string;
  owner_id: string;
  node_title: string;
  test_id?: string;
  node_id?: string;
  messages: LessonMessage[];
};
export default Lesson;
