import useChatStore from "@/app/modules/prototype/chat/chatStorage";

let ChatInput = () => {
  // Access state and actions from the useChatStore hook.
  const { isLoading, sendData, setInputData, userInputData } = useChatStore();

  // Define a function to handle form submission.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the application is not in a loading state, then call the 'sendData' action.
    !isLoading && sendData();
  };

  return (
    <div className="w-3/4 max-w-[500px] absolute bottom-[8%] h-10 select-none border backdrop-blur-md flex items-center overflow-hidden border-accent outline-none rounded-lg">
      <form
        className="w-full h-full flex items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          onChange={(e) => {
            setInputData(e.target.value); // Update user input data as it changes.
          }}
          value={userInputData} // Display the current user input data in the input field.
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

export default ChatInput; // Export the ChatInput component for use in other parts of the application.
