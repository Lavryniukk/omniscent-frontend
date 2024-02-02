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
           box-border shadow-md  bg-azure-200 dark:bg-azure-800 pl-2  rounded-md dark:border dark:border-azure-700 transition-all duration-300 p-3 text-base
				  outline-none  w-full peer `}
      />
      <label
        className={`text-azure-950/70  bg-azure-200 dark:text-azure-50/70 h-fit block absolute top-2 left-2 px-2 transition duration-300 rounded-full 
        peer-focus:-translate-y-[87.7%] peer-focus:scale-90   dark:bg-azure-800 select-none pointer-events-none ${
          inputData ? "-translate-y-[87.7%] scale-90" : ""
        }`}
      >
        Language name
      </label>
    </div>
  );
}
