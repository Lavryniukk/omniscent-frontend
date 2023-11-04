export default function Message({
  type,
  content,
}: {
  type: "user" | "ai";
  content: string;
}) {
  return (
    <div
      className={`text-accent text-lg p-4 flex justify-start items-start gap-4 w-full ${
        type === "user" ? "bg-background" : "bg-secondary"
      }`}
    >
      <div>
        <div className="w-[32px] h-[32px] bg-accent rounded-full" />
      </div>
      <div className="break-normal">{content}</div>
    </div>
  );
}
