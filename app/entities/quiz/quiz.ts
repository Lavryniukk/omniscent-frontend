import { Message } from "@/app/shared/entities";

export type Quiz = {
  title: string;
  covered_material: [string];
  node_id: string;
  messages: [Message];
  created_at: Date;
  updated_at: Date;
};
