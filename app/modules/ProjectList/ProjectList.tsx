"use client";

import ProjectContainer from "./components/ProjectContainer/ProjectContainer";

let arr = [
  { title: "Next js front-end developer" },
  { title: "Next js front-end developer" },
  { title: "Next js front-end developer" },
];
let ProjectList = () => {
  let res = arr.map((elem) => <ProjectContainer title={elem.title} />);
  return (
    <div className="mx-auto w-1/3 max-w-[600px] min-w-[500px] p-5 font-inter h-[800px] border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight mt-10 font-inter">
        Your learning projects
      </h1>
      <div className="w-3/4 mx-auto border-y border-accent space-y-5 p-5 h-fit mt-20">
        {res}
      </div>
      <p className="mx-auto text-center underline-offset-2 select-none underline text-accent-600 mt-10">
        Create new project
      </p>
    </div>
  );
};
export default ProjectList;
