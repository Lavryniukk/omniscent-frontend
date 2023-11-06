"use client";

import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import { FormState } from "./types/FormProps";
import sendData from "./helpers/sendData";

export default function NewProjectForm() {
  const [formData, setFormData] = useState<FormState>({
    inputData: null,
    selectData: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendData(formData);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, inputData: e.target.value }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, selectData: e.target.value }));
  };

  return (
    <div className="w-fit h-fit container border mx-auto font-inter rounded-lg border-secondary px-8 max-w-[600px] py-12 ">
      <form
        className="flex flex-col space-y-16 h-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-text text-center text-3xl font-bold">
          Help us, help you!
        </h2>

        <FormInput handleFunction={handleInput} />

        <FormSelect handleFunction={handleSelect} />

        <FormSubmit />
      </form>
    </div>
  );
}
