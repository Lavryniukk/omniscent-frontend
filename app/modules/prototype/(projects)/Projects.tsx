import { GoPlus } from "react-icons/go";
let getProjects = async () => {
  try {
    fetch("https://localhost:3000/api/user/session").then((res) => {
      console.log(res);
      //   res.json().then((token) => {
      //     if (token) {
      //       console.log(token);
      //   fetch("https://omniscient-backend.onrender.com/projects/all", {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }).then((res) => {
      //     res.json().then((parsedRes) => {
      //       console.log("this is response:", parsedRes);
      //     });
      //   });
      //     }
      //   });
    });
  } catch (e) {
    console.log(e);
  }
};
let Projects = () => {
  getProjects();
  return (
    <>
      <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
        <GoPlus />
      </div>
      <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
        <GoPlus />
      </div>
      <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
        <GoPlus />
      </div>
    </>
  );
};
export default Projects;
