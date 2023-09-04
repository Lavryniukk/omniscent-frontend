import PageGradient from "@/app/UI/PrototypePageGradient";
import PrototypeMain from "@/app/modules/prototype/PrototypeHome";

let PrototypePage = () => {
  return (
    <div className="">
      <PageGradient
        left="/images/prototypebg-left.png"
        right="/images/prototypebg-right.png"
      />
      <PrototypeMain />
    </div>
  );
};
export default PrototypePage;
