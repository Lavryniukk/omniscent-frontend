import { PiCaretUpDownFill } from "react-icons/pi";
import useProjectFormStorage from "../../storage/ProjectFormStorage";

export default function FormSelect() {
  const { setProjectFormSelect } = useProjectFormStorage();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectFormSelect(e.target.value);
  };

  return (
    <div className="flex justify-between items-center">
      <label className="text-text text-lg">Tech type</label>
      <div className="relative max-w-[220px] w-full">
        <select
          onChange={(e) => handleSelect(e)}
          className="bg-background appearance-none box-border transition-all duration-200 p-2 pl-1 text-base
				 text-accent outline-none focus:rounded-b-none border-b-2 border-accent w-full divide-y-8"
        >
          <option value="placeholder" disabled selected>
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
