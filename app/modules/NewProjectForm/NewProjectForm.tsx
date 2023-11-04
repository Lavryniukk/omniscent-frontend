"use client";

import { PiCaretUpDownFill } from "react-icons/pi";

export default function NewProjectForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submit");
  };
  return (
    <div className="w-1/3 h-[50vh] border mx-auto font-inter rounded-lg border-secondary px-8 min-w-[500px] max-w-[600px] py-12 ">
      <form
        className="flex flex-col justify-between h-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-text text-center text-3xl font-bold">
          Help us, help you!
        </h2>
        <div className="flex justify-between items-center">
          <label className="text-text text-lg">Tech name</label>
          <div
            className={`flex relative flex-col max-w-[220px] after:text-xs after:italic after:absolute after:right-0 after:top-[110%] after:text-accent 
			after:content-["Note:_If_your_tech_don't_fall_under_type,_you_choose,_you_won't_be_able_to_create_your_roadmap."]`}
          >
            <input
              type="text"
              placeholder="Provide tech"
              className={`relative overflow-visible 
			   bg-background box-border border-b-2 pl-1 border-accent transition-all duration-200 p-2 text-base
				 text-accent placeholder:text-accent outline-none focus:border-accent w-full`}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-text text-lg">Tech type</label>
          <div className="relative max-w-[220px] w-full">
            <select
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
              {/* <option
                value="languages"
                title="In progress"
                disabled
                className="border-x-2 border-accent"
              >
                {`Languages (in progress)`}
              </option> */}
            </select>
            <PiCaretUpDownFill
              className={`absolute w-[24px] h-[24px] right-1 top-2 text-accent pointer-events-none `}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-text p-3 box-border transition-colors duration-200 border w-1/2 mx-auto rounded-md hover:text-background hover:bg-text"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
