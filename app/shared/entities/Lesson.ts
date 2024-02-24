export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

type Lesson = {
  _id: string;
  title: string;
  node_id: string;
  messages: Message[];
};
export default Lesson;
