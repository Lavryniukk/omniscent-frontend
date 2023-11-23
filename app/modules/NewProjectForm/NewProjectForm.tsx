"use client";

import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import { FormState } from "./types/FormProps";
import sendData from "./helpers/sendData";

import { useRouter } from "next/navigation";

export default function NewProjectForm() {
  const router = useRouter();
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

    router.push("/workspace");
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
            Create roadmap
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
        <div className="text-text border w-1/2 aspect-square rounded-full border-secondary border-t-accent animate-spin my-[92px]"></div>
      )}
    </form>
  );
}
