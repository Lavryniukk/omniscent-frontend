import NewProjectForm from "@/app/modules/NewProjectForm/NewProjectForm";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";

const Create = () => {
  return (
    <div className="flex h-screen border-accent items-center px-3">
      <Link
        href="/workspace"
        className="flex items-center justify-center p-2  w-fit text-accent fixed left-10 top-10 hover:opacity-80"
      >
        <MdOutlineArrowBack />
        To workspace
      </Link>
      <NewProjectForm />
    </div>
  );
};

export default Create;
