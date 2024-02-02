import { HandleFunctionProps, RoadmapSize } from "../../types/FormProps";
import { ChevronDown, SparklesIcon } from "lucide-react";

export default function FormSelect({
  handleFunction,
}: {
  handleFunction: HandleFunctionProps["selectHandleFunction"];
}) {
  return (
    <div className="flex relative p-3  rounded-lg border w-full border-azure-800 dark:border-azure-300   justify-between items-center">
      <select
        required
        defaultValue={RoadmapSize.MEDIUM}
        onChange={(e) => handleFunction(e)}
        className="bg-azure-100 dark:bg-azure-900 peer appearance-none box-border transition-all duration-200 text-base
				 text-azure-950/70 dark:text-azure-50/70 outline-none cursor-pointer w-full "
      >
        <option value={RoadmapSize.MEDIUM}>Programming language</option>
        <option value={RoadmapSize.SMALL}>
          Framework / Library (beta)
        </option>
      </select>
      <ChevronDown
        className={` w-[24px] h-[24px] absolute cursor-pointer right-3  text-azure-950/70 dark:text-azure-50/70 pointer-events-none `}
      />
    </div>
  );
}
