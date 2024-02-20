import useLessonStorage from "@/app/shared/stores/lessonStorage";
import Message from "./components/Message";
export default function Messages({}) {
  const { lesson, setLesson } = useLessonStorage();

  return (
    <div
      role="presentation"
      className="overflow-auto w-full py-5 h-auto max-h-full min-w-[350px] flex-col"
    >
      {lesson?.messages?.map((message, index) => {
        return (
          message.role !== "system" && (
            <Message
              content={message.content}
              role={message.role}
              key={index}
            />
          )
        );
      })}
    </div>
  );
}
