import Input from "@/app/(pages)/prototype/components/PrototypeInput";
import Title from "@/app/(pages)/prototype/components/PrototypeTItle";

let PrototypeMain = () => {
  return (
    <div className=" w-fit mx-auto mt-60">
      <Title />
      <Input />
      <div className="flex flex-row justify-around mt-10 select-none">
        <div className="w-4/12 border-2 aspect-square rounded-2xl border-secondary hover:border-accent"></div>
        <div className="w-4/12 border-2 aspect-square rounded-2xl border-secondary hover:border-accent"></div>
      </div>
    </div>
  );
};
export default PrototypeMain;
