"use client";

import { useEffect, useState } from "react";
import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import { FormState } from "./types/FormProps";
import sendData from "./helpers/sendData";

export default function NewProjectForm() {
  const [formData, setFormData] = useState<FormState>({
    inputData: "",
    selectData: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData((prev) => ({ ...prev, inputData: "" }));

    console.log("Submit");

    // sendData(formData);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, inputData: e.target.value }));
  };

  // const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormData((prev) => ({ ...prev, selectData: e.target.value }));
  // };

  return (
    <form
      className="flex flex-col items-center space-y-24 w-full h-fit max-w-[500px] container border justify-center xs:mx-auto font-inter rounded-lg border-secondary px-8 py-12 mx-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-text text-center text-3xl font-bold">
        Help us, help you!
      </h2>

      {/* <div className="flex flex-col gap-16"> */}
      <FormInput handleFunction={handleInput} inputData={formData.inputData} />

      {/* <FormSelect handleFunction={handleSubmit} /> */}
      {/* </div> */}

      <FormSubmit />
    </form>
  );
}
