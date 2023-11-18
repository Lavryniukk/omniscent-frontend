import { useEffect, useRef, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { PiCaretUpDownFill } from "react-icons/pi";
import { HandleFunctionProps } from "../../types/FormProps";

export default function FormSelect({
  handleFunction,
}: {
  handleFunction: HandleFunctionProps["selectHandleFunction"];
}) {
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleInfo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      e.stopPropagation();
      const elem = iconRef.current;

      if (elem && !elem.contains(e.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [iconRef]);

  return (
    <div className="flex justify-between items-center">
      <label className="text-text text-lg relative p-2">
        Tech type
        <div
          ref={iconRef}
          className="absolute -top-2 -right-4 z-50 cursor-pointer w-[16px] h-[16px]"
          onClick={(e) => handleInfo(e)}
        >
          <AiFillInfoCircle className=" text-accent w-[16px] h-[16px]" />
        </div>
        <div
          className={`absolute -top-2 left-[125%] z-10 bg-background text-accent w-[300px]
           text-xs p-2 border border-accent rounded select-none ${
             isVisible ? "" : "hidden"
           }`}
        >
          {`If your technology doesn't match any listed types, you will not be able to proceed with creating a roadmap.`}
        </div>
      </label>
      <div className="relative max-w-[220px] w-full">
        <select
          required
          defaultValue={"placeholder"}
          onChange={(e) => handleFunction(e)}
          className="bg-background appearance-none box-border transition-all duration-200 p-2 pl-1 text-base
				 text-accent outline-none focus:rounded-b-none border-b-2 border-accent w-full divide-y-8"
        >
          <option value="placeholder" disabled>
            Choose type
          </option>
          <option value="digital">Digital</option>
          <option value="economic" title="In progress" disabled>
            {`Coming soon...`}
          </option>
        </select>

        <PiCaretUpDownFill
          className={`absolute w-[24px] h-[24px] right-1 top-2 text-accent pointer-events-none `}
        />
      </div>
    </div>
  );
}
