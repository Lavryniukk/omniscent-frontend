export default interface MessageType {
  type: "user" | "ai";
  content: string;
}
