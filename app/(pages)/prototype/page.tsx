import PageGradient from "@/app/UI/PrototypePageGradient";
import PrototypeMain from "@/app/modules/prototype/PrototypeHome";
import Image from "next/image";
let PrototypePage = () => {
  return (
    <div className="">
      <PageGradient
        left="/images/prototypebg-left.png"
        right="/images/prototypebg-right.png"
      />
      <div>
        <Image
          className="fixed h-screen w-screen top-0 opacity-10 -z-10"
          src={"/images/bg-image.jpg"}
          width={1200}
          height={1200}
          alt=""
          role="presentation"
        />
        <div className="w-screen h-screen -z-10 fixed top-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>
      <PrototypeMain />
    </div>
  );
};
export default PrototypePage;
