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
  const router = useRouter();

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
    console.log(formData);
    await sendData(formData);

    setTimeout(() => {
      router.push("/workspace");
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
      className="flex flex-col items-center border space-y-10 min-w-[350px]  w-1/3 h-fit justify-center xs:mx-auto  rounded-lg  border-secondary gap-4 px-4 py-8 xs:px-8 xs:py-12 mx-3"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-text text-center text-2xl  font-bold">
        Create project
      </h2>
      <div className="w-full gap-5 flex items-center flex-col justify-center">
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
