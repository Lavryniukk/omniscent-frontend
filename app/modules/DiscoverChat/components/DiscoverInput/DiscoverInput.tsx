import { useEffect, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import useDiscoverChat from "../../storage/DiscoverChatStorage";

export default function DiscoverInput() {
  const { userInputData, setInputData } = useDiscoverChat();
  const [isDisabled, setisDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (userInputData.length > 0) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [userInputData]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDisabled) {
      return;
    }

    console.log(userInputData);
  };
  return (
    <form
      className="w-11/12 box-border h-[50px] absolute bottom-5 discover-chat-left bg-secondary rounded-xl flex"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="w-11/12 h-full box-border bg-transparent rounded-l-xl p-4 placeholder:text-lg text-accent text-lg focus:outline-none"
        placeholder="Start typing..."
        onChange={(e) => setInputData(e.target.value)}
        name="discoverInput"
      />
      <div className="w-1/12 h-full rounded-r-xl flex justify-center items-center">
        <button
          className={`px-2 py-3 ${
            isDisabled
              ? "bg-secondary cursor-default"
              : "bg-primary hover:opacity-70"
          } rounded-lg h-3/4 m-auto flex justify-center items-center transition duration-200`}
          type="submit"
        >
          <BiSolidSend className="w-[24px] h-[24px] text-accent " />
        </button>
      </div>
    </form>
  );
}
