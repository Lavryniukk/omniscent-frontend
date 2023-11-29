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
      className={`text-text-300 px-5 w-auto mx-auto select-text flex-col text-md ${
        role === "system" && "hidden"
      }  flex justify-start items-center gap-3 p-2 w-full ${
        role === "user" ? "bg-background" : "bg-secondary"
      }`}
    >
      <div
        className={`max-w-[1000px] flex flex-col items-start  w-full space-y-3`}
      >
        <div className="flex items-center justify-center ">
          <div className="w-[20px] lg:w-[32px] aspect-square border bg-accent rounded-full" />
          <p className="ml-1 text-accent">{role === "user" ? "You" : "John"}</p>
        </div>
        <article
          dangerouslySetInnerHTML={createMarkup(content)}
          className="mt-[5px] break-words text-lg w-full font-inter"
        />
      </div>
    </div>
  );
}
