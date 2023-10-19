import TypingAnimation from "@/app/modules/Hero/components/TypingAnimation/TypingAnimation";
import GetStartedButton from "@/app/modules/Hero/components/GetStartedButton/GetStartedButton";
import Gradient from "@/app/modules/Hero/components/Gradient/Gradient";
import Title from "./components/Title/Title";

let Home = () => {
  return (
    <div
      className=" overflow-hidden h-fit bg-transparent mx-auto box-border max-w-10xl
					  w-full "
    >
      <div className=" border-dashed border-secondary-900  w-fit mx-auto">
        {/* <Gradient />  */}
        <Title />
      </div>
    </div>
  );
};
export default Home;
