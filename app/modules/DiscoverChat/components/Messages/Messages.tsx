import Conversation from "@/app/shared/entities/Conversation";
import Message from "../Message/Message";

export default function Messages({
  conversation,
  isLoading,
  error,
}: {
  conversation: Conversation;
  isLoading: boolean;
  error: unknown;
}) {
  const messages = conversation && conversation.messages;

  return (
    <div className="overflow-y-auto relative max-h-[63vh] w-full p-0 m-0 flex items-center justify-center  h-fit flex-col">
      {isLoading ? (
        <div className="w-20 h-20 rounded-full border-text border-t-2 m-5 mt-20 animate-spin" />
      ) : error ? (
        <div className="border-accent border rounded-lg text-text h-fit space-y-2 py-2 text-lg text-center mt-20 w-80">
          <p>Whoops, an error occured during convresation loading</p>
          <button
            onClick={() => location.reload()}
            className="py-1 px-7 text-background bg-text transition-colors hover:text-text duration-200 hover:bg-background border-text border rounded-md"
          >
            Retry
          </button>
        </div>
      ) : (
        <div>
          {messages.map((message, index) => (
            <Message
              content={message.content}
              role={message.role}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
