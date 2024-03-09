import { Message } from "@/app/shared/entities";

export type Lesson = {
  _id: string;
  title: string;
  node_id: string;
  messages: Message[];
  created_at: Date;
  updated_at: Date;
};
