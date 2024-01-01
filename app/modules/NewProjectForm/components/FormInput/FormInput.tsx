import { HandleFunctionProps } from "../../types/FormProps";

export default function FormInput({
  handleFunction,
  inputData,
}: {
  handleFunction: HandleFunctionProps["inputHandleFunction"];
  inputData: string;
}) {
  return (
    <div className="flex space-y-1 rounded-xl justify-center items-center w-full sm:w-3/4 relative">
      <input
        required
        value={inputData}
        onChange={handleFunction}
        type="text"
        className={`relative overflow-visible 
          bg-transparent box-border border-2 pl-2 rounded-md border-accent transition-all duration-200 p-3 text-base
				 text-accent placeholder:text-accent outline-none focus:border-accent w-full peer `}
      />
      <label
        className={`text-accent  h-fit block absolute top-2 left-2 px-2 transition duration-500 rounded-full 
        peer-focus:-translate-y-[87.7%] peer-focus:scale-90 bg-background select-none pointer-events-none ${
          inputData ? "-translate-y-[87.7%] scale-90" : ""
        }`}
      >
        Language name
      </label>
    </div>
  );
}
