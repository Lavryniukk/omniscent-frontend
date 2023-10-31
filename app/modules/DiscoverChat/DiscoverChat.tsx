import DiscoverInput from "./components/DiscoverInput/DiscoverInput";
import Message from "./components/Message/Message";
import MessageType from "./types/MessageType";

const arr: Array<MessageType> = [
  {
    type: "user",
    content: `Hello! Its great to hear that you want to learn front-end development.
  Front-end development is an exciting field that allows you to create
  user interfaces and bring web designs to life. Whether youre a complete
  beginner or have some prior experience, Ill provide you with a roadmap
  to get started and make progress in front-end development.`,
  },
  {
    type: "ai",
    content: `Hello! Its great to hear that you want to learn front-end development.
  Front-end development is an exciting field that allows you to create
  user interfaces and bring web designs to life. Whether youre a complete
  beginner or have some prior experience, Ill provide you with a roadmap
  to get started and make progress in front-end development.`,
  },
  {
    type: "user",
    content: `Hello! Its great to hear that you want to learn front-end development.
  Front-end development is an exciting field that allows you to create
  user interfaces and bring web designs to life. Whether youre a complete
  beginner or have some prior experience, Ill provide you with a roadmap
  to get started and make progress in front-end development.`,
  },
  {
    type: "ai",
    content: `Hello! Its great to hear that you want to learn front-end development.
  Front-end development is an exciting field that allows you to create
  user interfaces and bring web designs to life. Whether youre a complete
  beginner or have some prior experience, Ill provide you with a roadmap
  to get started and make progress in front-end development.`,
  },
];

export default function DiscoverChat() {
  return (
    <div className="w-8/12 mx-auto border min-h-[80vh] max-h-[950px] h-full border-accent rounded-3xl relative overflow-hidden pt-[5vh]">
      <div className="w-full absolute h-[5vh] bg-secondary-900 top-0 left-0" />

      <div className="overflow-y-scroll max-h-[65vh] w-full p-0 m-0">
        {arr.map((item, index) => (
          <Message key={index} type={item.type} content={item.content} />
        ))}
      </div>
      <DiscoverInput />
    </div>
  );
}
