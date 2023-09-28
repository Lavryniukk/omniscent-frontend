import useChatStore from "@/app/shared/storages/chatStorage";

let ChatInput = () => {
  const { isLoading, sendData, setInputData, userInputData } = useChatStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !isLoading && sendData();
  };
  return (
    <div className="w-3/4 max-w-[500px] fixed bottom-[8%] h-10 select-none border backdrop-blur-md flex items-center overflow-hidden  border-accent outline-none rounded-lg ">
      <form
        className=" w-full h-full flex items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          value={userInputData}
          placeholder="I want to learn..."
          className="bg-transparent w-[90%] px-2 text-accent box-border outline-none focus:border-text"
        />
        <button
          type="submit"
          className="text-text bg-secondary duration-200 border border-accent opacity-70 hover:opacity-100 transition-all w-[15%] mx-2 sm:text-sm text-xs h-2/3 rounded-lg box-border"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default ChatInput;
