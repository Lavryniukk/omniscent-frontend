import { Message } from "./Lesson";

type Quiz = {
  title: string;
  covered_material: [string];
  node_id: string;
  messages: [Message];
};
export default Quiz;
