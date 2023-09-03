import { NextPage } from "next";
import Logo from "@/app/UI/icons/OmniLogo";
let Faq: NextPage = () => {
  return (
    <div className="mt-96 mx-auto relative rounded-full w-56 h-56 border-30 border-primary ">
      <div className="absolute -top-24 -right-85 rounded-full rotate-45 h-80 w-80 border-l-30 border-t-30 border-primary" />
      <div className="absolute top-8 left-9 rounded-full rotate-45 h-24 w-24 border-l-15 border-t-15 border-primary" />
    </div>
  );
};
export default Faq;
