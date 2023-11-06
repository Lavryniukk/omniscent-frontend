"use client";

import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import FormSubmit from "./components/FormSubmit/FormSubmit";
import useProjectFormStorage from "./storage/ProjectFormStorage";

export default function NewProjectForm() {
  const sendData = useProjectFormStorage((state) => state.sendData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendData();
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

        <FormInput />

        <FormSelect />

        <FormSubmit />
      </form>
    </div>
  );
}
