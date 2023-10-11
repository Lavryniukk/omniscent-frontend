import { useState } from "react";
import { createProject } from "./api/createProject";
import TitleInput from "./components/TitleInput/TitleInput";
import ContextInput from "./components/ContextInput/ContextInput";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { redirect } from "next/navigation";
let NewProjectForm = () => {
  let [title, setTitle] = useState<string>("");
  let [context, setContext] = useState<string>("");
  let handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  let handleContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };
  let handleSubmit = () => {
    createProject(title, context);
    redirect("/projects");
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
