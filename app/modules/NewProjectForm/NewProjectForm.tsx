import { useState } from "react";
import { createProject } from "./api/createProject";
import TitleInput from "./components/TitleInput/TitleInput";
import ContextInput from "./components/ContextInput/ContextInput";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { useRouter } from "next/navigation";
let NewProjectForm = () => {
  let router = useRouter();
  let [title, setTitle] = useState<string>("");
  let [context, setContext] = useState<string>("");
  let setRemoved = () => {
    setTitle("Removing...");
  };
  let handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  let handleContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };
  let handleSubmit = () => {
    createProject(title, context);
    router.push("/projects");
  };
  return (
    <div
      onSubmit={handleSubmit}
      className="border w-1/2 min-w-[350px] h-fit space-y-5 rounded-2xl p-10"
    >
      <TitleInput title={title} handler={handleTitleChange} />
      <ContextInput context={context} handler={handleContextChange} />
      <SubmitButton handler={handleSubmit} />
    </div>
  );
};
export default NewProjectForm;
