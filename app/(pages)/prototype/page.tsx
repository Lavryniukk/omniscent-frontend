import PageGradient from "@/app/UI/PrototypePageGradient";
import PrototypeMain from "@/app/modules/prototypePage/PrototypeHome";

let PrototypePage = () => {
  return (
    <div className="border">
      <PageGradient
        // left="/images/prototypebg-left.png"
        // right="/images/prototypebg-right.png"
        url="/images/prototypeTopGrad.png"
      />
      <PrototypeMain />
    </div>
  );
};
export default PrototypePage;
