"use client";

let ProjectList = () => {
  return (
    <div className="mx-auto w-1/3 p-5 font-inter h-[800px] border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight mt-10 font-inter">
        Your learning projects
      </h1>
      <div className="w-3/4 mx-auto border-y border-accent space-y-5 p-5 h-fit mt-20">
        <div className="py-5 border border-secondary rounded-lg text-lg text-center text-accent pl-3">
          Next Js front-end developer
        </div>
        <div className="py-5 border border-secondary rounded-lg text-lg text-center text-accent pl-3">
          Nest Js back-end developer
        </div>
        <div className="py-5 border border-secondary rounded-lg text-lg text-center mx-auto text-accent pl-3">
          Marketing scientist
        </div>
        <div className="py-5 border border-secondary rounded-lg text-lg text-center mx-auto text-accent pl-3">
          Unity C# Game developer
        </div>
      </div>
      <p className="mx-auto text-center underline-offset-2 select-none underline text-accent-600 mt-10">
        Create new project
      </p>
    </div>
  );
};
export default ProjectList;
