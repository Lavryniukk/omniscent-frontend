import DiscoverInput from "./components/DiscoverInput/DiscoverInput";
import Message from "./components/Message/Message";
import useDiscoverChat from "./storage/DiscoverChatStorage";

export default function DiscoverChat() {
  const { chat } = useDiscoverChat();

  return (
    <div className="mx-auto border container  min-h-[80vh] max-h-[950px] h-full border-accent rounded-2xl max-w-[1200px] relative overflow-hidden pt-[5vh]">
      <div className="w-full absolute h-[5vh] bg-secondary-900 top-0 left-0" />

      <div className="overflow-y-auto relative max-h-[63vh] w-full p-0 m-0 flex items-center flex-col">
        {chat.length ? (
          chat.map((item, index) => (
            <Message key={index} type={item.role} content={item.content} />
          ))
        ) : (
          <button className=" border-text bg-text hover:bg-background text-background hover:text-text py-2 rounded-md font-semibold px-5 text-lg text-center ">
            Start learning
          </button>
        )}
      </div>
      <DiscoverInput />
    </div>
  );
}
