"use client";
import NewProjectField from "@/app/modules/NewProjectField/NewProjectField";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function NewProject() {
  return (
    <div className="max-w-7xl select-none flex items-center justify-center h-screen mx-auto">
      <NewProjectField />
    </div>
  );
}
export default withPageAuthRequired(NewProject);
