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
      return <Button  >Create</Button>;
  }
}
