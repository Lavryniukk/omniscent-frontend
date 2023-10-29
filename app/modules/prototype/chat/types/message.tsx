/* Define a custom TypeScript type 'roleType' which can have one of three values: 'user', 'assistant', or 'system'. */
export type roleType = "user" | "assistant" | "system";

/* Define an interface 'message' to represent chat messages. It has two properties: 'role' for the role of the message and 'content' for the message content. */
export interface message {
  role: roleType;
  content: string; // Content of the message, a string.
}
