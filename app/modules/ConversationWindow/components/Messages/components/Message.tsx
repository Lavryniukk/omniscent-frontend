export default function Message({
  role,
  content,
}: {
  role: "user" | "assistant" | "system";
  content: string;
}) {
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };
  return (
    <div
      className={`text-text-300 text-md ${
        role === "system" && "hidden"
      }  flex justify-start items-start gap-3 p-2 w-full ${
        role === "user" ? "bg-background" : "bg-secondary"
      }`}
    >
      <div className="flex items-center justify-center ">
        <div className="w-[20px] lg:w-[32px] aspect-square border bg-accent rounded-full" />
        <p className="ml-1 text-accent">{role === "user" ? "You" : "John"}</p>
      </div>
      <div className="break-words w-full ">
        <article dangerouslySetInnerHTML={createMarkup(content)} />
      </div>
    </div>
  );
}
