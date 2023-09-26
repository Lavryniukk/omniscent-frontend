import PageGradient from "@/app/UI/PrototypePageGradient";
import Grid from "@/app/components/prototypeComponents/PrototypeGrid";
import PrototypeMain from "@/app/modules/prototype/PrototypeHome";
import Image from "next/image";
let PrototypePage = () => {
  return (
    <div className="">
      <PageGradient
        left="/images/prototypebg-left.png"
        right="/images/prototypebg-right.png"
      />
      <Grid />
      <PrototypeMain />
    </div>
  );
};
export default PrototypePage;
