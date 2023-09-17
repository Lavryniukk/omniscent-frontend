let Pricing = () => {
  return (
    <div className=" border-secondary w-full from-slate-950 to-background">
      <div className="gradient h-[1000px] hidden xl:block center-align top-[230px] -z-10 blur-[160px] opacity-70 w-[1000px] absolute" />
      <div
        className=" select-none overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
  w-full my-32 h-[800px] justify-around items-end"
      >
        <h2 className="text-text my-20 text-7xl font-bold font-roboto mx-auto text-center">
          Mermberships
        </h2>
        <div className=" w-full flex flex-row relative justify-center space-x-10 items-end mx-auto h-2/3 min-h-[550px] max-h-[550px]">
          <div className="h-4/6 w-1/4 p-8 border-2 bg-background bg-opacity-90 rounded-xl border-secondary">
            <h1 className="text-2xl mb-2 text-left text-text font-light">
              Trial
            </h1>
            <h1 className="text-4xl font-bold text-left text-text ">
              $0
              <span className="text-xl text-slate-500"> /month</span>
            </h1>
          </div>
          <div className="h-full w-1/4 p-8 border-2 bg-background bg-opacity-90 rounded-xl border-secondary">
            <h1 className="text-2xl mb-2 text-left text-text font-light">
              Pro
            </h1>
            <h1 className="text-4xl font-bold text-left text-text ">
              $13,99
              <span className="text-xl text-slate-500"> /month</span>
            </h1>
          </div>
          <div className="h-5/6 w-1/4 p-8 border-2 bg-background bg-opacity-90 rounded-xl border-secondary">
            <h1 className="text-2xl mb-2 text-left text-text font-light">
              Enterprise
            </h1>
            <h1 className="text-4xl font-bold text-left text-text ">Custom</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
