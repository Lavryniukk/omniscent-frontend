import { AlertCircle } from "lucide-react";
import { FormStatusEnum } from "../../types/formStatusEnum";
import CreatingAnimation from "../CreatingAnimation/CreatingAnimation";
import Button from "@/app/UI/buttons/Button";

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
          className={`text-azure-950 dark:text-azure-50  text-xl w-full font-medium px-5 py-4 box-border border-azure-700 dark:border-azure-300  transition-colors duration-200 border sm:w-3/4 mx-auto rounded-md 
         hover:bg-azure-700 dark:hover:bg-azure-300 hover:text-azure-50 dark:hover:text-azure-950
     `}
        >
          Create
        </button>
      );
  }
}
