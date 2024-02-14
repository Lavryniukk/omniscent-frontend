import CardSection from "./components/CardSection";
import ChooseYourLanguageSection from "./components/ChooseYourLanguageSection";

let FeaturesSection = () => {
  return (
    <div className=" py-20 h-fit flex flex-col items-center relative overflow-hidden ">
      <div className="box-border w-full sm:py-20 overflow-hidden  flex-col mx-auto space-y-20 overflow-x-hidden font-normal relative max-w-10xl">
        {/* <CardSection /> */}
        <ChooseYourLanguageSection />
      </div>
    </div>
  );
};

export default FeaturesSection;
