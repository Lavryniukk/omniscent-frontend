import { AlertCircle } from "lucide-react";
import { FormStatusEnum } from "../../types/formStatusEnum";
import CreatingAnimation from "../CreatingAnimation/CreatingAnimation";

export default function FormSubmit({ status }: { status: FormStatusEnum }) {
  switch (status) {
    case FormStatusEnum.LOADING:
      return <CreatingAnimation />;

    case FormStatusEnum.ERROR:
      return (
        <div className="mx-auto flex items-center gap-2 text-lg text-text font-semibold">
          <AlertCircle color="rgb(200,50,50)" />
          <p>An error occurred, you better call Lev</p>
        </div>
      );
    case FormStatusEnum.NULL:
      return (
        <button
          type="submit"
          className={`text-azure-950 dark:text-azure-50 text-xl w-full font-medium px-5 py-4 box-border border-azure-700 dark:border-azure-700 dark:bg-azure-800 transition-colors duration-200 shadow-md dark:border sm:w-3/4 mx-auto rounded-md 
         hover:bg-azure-200  dark:hover:bg-azure-700 
     `}
        >
          Create
        </button>
      );
    case FormStatusEnum.DONE:
      return (
        <div className="mx-auto  flex items-start text-left gap-2 text-base text-azure-950 dark:text-azure-50 font-semibold">
          <AlertCircle className=" text-green-700 dark:text-green-400" />
          <p>Project created successfully! Visit your workspace;)</p>
        </div>
      );
  }
}
