import { HandleFunctionProps } from "../../types/FormProps";

export default function FormInput({
  handleFunction,
  inputData,
}: {
  handleFunction: HandleFunctionProps["inputHandleFunction"];
  inputData: string;
}) {
  return (
    <div className="flex space-y-1 rounded-xl justify-center items-center w-full relative">
      <input
        required
        value={inputData}
        onChange={handleFunction}
        type="text"
        className={`relative overflow-visible 
          bg-transparent box-border border pl-2 rounded-md border-azure-800 dark:border-azure-300 transition-all duration-200 p-3 text-base
				 text-accent placeholder:text-accent outline-none focus:border-accent w-full peer `}
      />
      <label
        className={`text-azure-950/70 dark:text-azure-50/70 h-fit block absolute top-2 left-2 px-2 transition duration-500 rounded-full 
        peer-focus:-translate-y-[87.7%] peer-focus:scale-90 bg-azure-100 dark:bg-azure-900 select-none pointer-events-none ${
          inputData ? "-translate-y-[87.7%] scale-90" : ""
        }`}
      >
        Language name
      </label>
    </div>
  );
}
