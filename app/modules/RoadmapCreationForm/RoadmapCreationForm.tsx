"use client";
import { useState } from "react";
import FormInput from "./components/FormInput/FormInput";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import { FormState, RoadmapSize } from "./types/FormProps";
import sendData from "./api/sendData";
import { useRouter } from "next/navigation";
import { FormStatusEnum } from "./types/formStatusEnum";
import FormSelect from "./components/FormSelect/FormSelect";

export default function NewProjectForm() {
  const [formData, setFormData] = useState<FormState>({
    inputData: "",
    selectData: RoadmapSize.MEDIUM,
  });
  const [responseStatus, setResponseStatus] = useState<FormStatusEnum>(
    FormStatusEnum.NULL
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResponseStatus(FormStatusEnum.LOADING);
    // await sendData(formData);

    setTimeout(() => {
      setResponseStatus(FormStatusEnum.DONE);

      setTimeout(() => {
        setResponseStatus(FormStatusEnum.NULL);
      }, 5000);
    }, 80000);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      selectData: e.target.value as RoadmapSize,
    }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, inputData: e.target.value }));
  };

  return (
    <form
      className="flex flex-col items-center  dark:border shadow-xl gap-12 w-3/4 lg:w-1/3 min-w-[350px] h-fit justify-center xs:mx-auto border-transparent bg-azure-100/60 dark:bg-azure-900 rounded-lg xs:border-azure-950/40 xs:dark:border-azure-700 px-4 py-8 xs:px-8 xs:py-12 mx-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="w-full gap-3 flex items-center flex-col justify-center">
        <FormInput
          handleFunction={handleInput}
          inputData={formData.inputData}
        />
        <FormSelect handleFunction={handleSelect} />
      </div>

      <FormSubmit status={responseStatus} />
    </form>
  );
}
