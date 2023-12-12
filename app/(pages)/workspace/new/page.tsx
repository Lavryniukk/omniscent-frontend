"use client"; // An environment-specific directive or comment, not part of the logic.

import NewProjectField from "@/app/modules/NewProjectField/NewProjectField";

function NewProject() {
  return (
    <div className="max-w-7xl select-none flex items-center justify-center h-screen mx-auto">
      <NewProjectField />{" "}
    </div>
  );
}

export default NewProject;
