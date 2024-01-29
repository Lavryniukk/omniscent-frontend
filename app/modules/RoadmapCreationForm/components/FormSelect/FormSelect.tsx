import { HandleFunctionProps, RoadmapSize } from "../../types/FormProps";
import { ChevronDown, SparklesIcon } from "lucide-react";

export default function FormSelect({
  handleFunction,
}: {
  handleFunction: HandleFunctionProps["selectHandleFunction"];
}) {
  return (
    <div className="flex relative p-3  rounded-lg border w-full border-secondary  justify-between items-center">
      <select
        required
        defaultValue={RoadmapSize.MEDIUM}
        onChange={(e) => handleFunction(e)}
        className="bg-background peer appearance-none box-border transition-all duration-200 text-base
				 text-accent outline-none cursor-pointer w-full "
      >
        <option value={RoadmapSize.MEDIUM}>Programming language</option>
        <option value={RoadmapSize.SMALL}>
          Framework / Library <i>(beta)</i>
        </option>
      </select>
      <ChevronDown
        className={` w-[24px] h-[24px] absolute cursor-pointer right-3  text-accent pointer-events-none `}
      />
    </div>
  );
}
