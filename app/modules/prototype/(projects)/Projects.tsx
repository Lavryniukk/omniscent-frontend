import { getAccessToken } from "@auth0/nextjs-auth0";
import { GoPlus } from "react-icons/go";
let getProjects = async () => {
  try {
    const { accessToken } = await getAccessToken();
    console.log(accessToken);

    fetch("https://omniscient-backend.onrender.com/projects/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      res.json().then((parsedRes) => {
        console.log("this is response:", parsedRes);
      });
    });
  } catch (e) {
    console.log(e);
  }
};
let Projects = async () => {
  await getProjects();
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
