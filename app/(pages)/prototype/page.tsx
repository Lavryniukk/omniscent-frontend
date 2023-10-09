import Projects from "@/app/modules/prototype/(projects)/Projects";

let PrototypePage = () => {
  return (
    <div className="flex h-screen border-accent items-center">
      <div className="mx-auto w-1/4 min-w-[300px] p-2 rounded-xl space-y-3 bg-secondary border-2 border-accent ">
        <Projects />
      </div>
    </div>
  );
};
export default PrototypePage;
