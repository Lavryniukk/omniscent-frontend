import { HandleFunctionProps, RoadmapSize } from "../../types/FormProps";
import { ChevronDown, SparklesIcon } from "lucide-react";

export default function FormSelect({
  handleFunction,
}: {
  handleFunction: HandleFunctionProps["selectHandleFunction"];
}) {
  return (
    <div className="flex relative p-3  rounded-lg border-2 w-full border-accent sm:w-3/4 justify-between items-center">
      <select
        required
        defaultValue={RoadmapSize.MEDIUM}
        onChange={(e) => handleFunction(e)}
        className="bg-background peer appearance-none box-border transition-all duration-200 text-base
				 text-accent outline-none cursor-pointer w-full "
      >
        <option value={RoadmapSize.MEDIUM}>Programming language</option>
        <option value={RoadmapSize.SMALL}>Framework / Library</option>
      </select>
      <div className=" divide-x hidden xs:flex divide-secondary/90 items-center px-3 py-2 hover:bg-text/90  bg-text text-primary absolute sm:max-lg:-translate-x-[12%] max-lg:translate-y-[150%] lg:translate-x-[85%] rounded-full">
        <div className="flex mr-2 gap-2">
          <SparklesIcon className="text-primary" />
          <h1>New</h1>
        </div>
        <p className="text-secondary/90 pl-2 text-sm whitespace-nowrap">
          Frameworks and libraries are now supported
        </p>
      </div>
      <ChevronDown
        className={` w-[24px] h-[24px] absolute cursor-pointer right-3  text-accent pointer-events-none `}
      />
    </div>
  );
}
