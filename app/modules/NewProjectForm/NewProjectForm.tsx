"use client";

import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import { FormState } from "./types/FormProps";
import sendData from "./helpers/sendData";

import CreatingAnimation from "./components/CreatingAnimation/CreatingAnimation";

export default function NewProjectForm() {
  const [formData, setFormData] = useState<FormState>({
    inputData: "",
    selectData: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    await sendData(formData);

    setFormData((prev) => ({ ...prev, inputData: "" }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, inputData: e.target.value }));
  };

  // const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormData((prev) => ({ ...prev, selectData: e.target.value }));
  // };

  return (
    <form
      className="flex flex-col items-center space-y-16 xs:space-y-24 w-full h-fit max-w-[500px] container xs:border justify-center xs:mx-auto font-inter rounded-lg xs:border-secondary px-4 py-8 xs:px-8 xs:py-12 mx-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      {!isLoading ? (
        <>
          <h2 className="text-text text-center text-4xl sm:text-5xl font-bold">
            Create project
          </h2>
          {/* <div className="flex flex-col gap-16"> */}
          <FormInput
            handleFunction={handleInput}
            inputData={formData.inputData}
          />
          {/* <FormSelect handleFunction={handleSubmit} /> */}
          {/* </div> */}
          <FormSubmit />
        </>
      ) : (
        <CreatingAnimation />
      )}
    </form>
  );
}
