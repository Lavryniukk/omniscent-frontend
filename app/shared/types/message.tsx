export type roleType = "user" | "assistant" | "system";
export interface message {
  role: roleType;
  content: string;
}
