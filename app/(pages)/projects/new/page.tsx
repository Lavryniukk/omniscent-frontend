"use client";
import NewProjectForm from "@/app/modules/NewProjectForm/NewProjectForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useState } from "react";

function NewProject() {
  return (
    <div className="max-w-7xl select-none flex items-center justify-center h-screen mx-auto">
      <NewProjectForm />
    </div>
  );
}
export default withPageAuthRequired(NewProject);
