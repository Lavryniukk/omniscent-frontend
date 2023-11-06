import { HandleFunctionProps } from "../../types/FormProps";

export default function FormInput({
  handleFunction,
}: {
  handleFunction: HandleFunctionProps["inputHandleFunction"];
}) {
  return (
    <div className="flex justify-between space-x-5 md:space-x-8  lg:space-x-10 xl:space-x-16 2xl:space-x-20 md:flex-row flex-col items-start md:items-center">
      <label className="text-text text-lg">Tech name</label>
      <div
        className={`flex relative flex-col max-w-[220px] after:text-xs after:italic after:absolute after:right-0 after:top-[110%] after:text-accent 
			    after:content-["Note:_If_your_tech_don't_fall_under_type,_you_choose,_you_won't_be_able_to_create_your_roadmap."]`}
      >
        <input
          onChange={(e) => handleFunction(e)}
          type="text"
          placeholder="Provide tech"
          className={`relative overflow-visible 
			   bg-background box-border border-b-2 pl-1 border-accent transition-all duration-200 p-2 text-base
				 text-accent placeholder:text-accent outline-none focus:border-accent w-full`}
        />
      </div>
    </div>
  );
}
