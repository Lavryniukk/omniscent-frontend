import DiscoverInput from "./components/DiscoverInput/DiscoverInput";
import Message from "./components/Message/Message";
import useDiscoverChat from "./storage/DiscoverChatStorage";

export default function DiscoverChat() {
  const { chat } = useDiscoverChat();
  return (
    <div className="w-8/12 mx-auto border min-h-[80vh] max-h-[950px] h-full border-accent rounded-3xl relative overflow-hidden pt-[5vh]">
      <div className="w-full absolute h-[5vh] bg-secondary-900 top-0 left-0" />

      <div className="overflow-y-auto max-h-[63vh] w-full p-0 m-0">
        {chat.length ? (
          chat.map((item, index) => (
            <Message key={index} type={item.role} content={item.content} />
          ))
        ) : (
          <div className="text-accent italic text-lg text-center mt-[32vh]">
            {"Don't be afraid, ask questions!"}
          </div>
        )}
      </div>
      <DiscoverInput />
    </div>
  );
}
