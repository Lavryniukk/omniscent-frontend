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
          className={`text-background bg-text text-xl w-full font-medium px-5 py-4 box-border border-text transition-colors duration-200 border sm:w-3/4 mx-auto rounded-md 
        hover:text-text hover:bg-background
     `}
        >
          Create
        </button>
      );
  }
}
