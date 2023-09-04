import Purchase from "@/app/UI/buttons/purchaseBtn/purchaseBtn";
import Line from "@/app/components/pricingFeature/PricingLine";
let Pricing = () => {
  return (
    <div
      className="space-y-10 select-none pricing overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
  w-full my-32 h-fit justify-around items-center"
    >
      <h2 className="text-text text-4xl font-roboto mx-auto text-center">
        What about pricing?
      </h2>
      <p className="font-roboto font-light mx-auto text-accent text-sm w-2/3 md:text-lg md:w-1/2 text-center mt-10">
        Our pricing is flexible, transparent, and tailored to your needs. Get
        the most value from our services without overstretching your budget.
        Choose the plan that suits you best and start your learning adventure
        today!
      </p>
      <div className="mx-auto flex lg:flex-row  flex-col space-y-10  lg:space-y-0 items-center lg:justify-around w-full h-fit">
        <div className="border-2 rounded-xl border-accent h-full md:min-h-[400px] lg:min-h-[500px] min-w-[300px] w-1/2 md:w-1/3 lg:w-1/4 py-10">
          <h2 className="text-text  text-3xl font-roboto  xl:text-4xl mx-auto text-center">
            Trial edition
          </h2>
          <h3 className="pl-6 text-text mt-5 text-xl xl:text-2xl ">Free</h3>
          <ul className="mt-5 text-md h-52 space-y-1 pl-6">
            <Line text="10 api calls" />
            <Line text="1 roadmap generation" />
            <Line text="Some feature" />
          </ul>
          <Purchase />
        </div>
        <div className="border-2 rounded-xl border-accent md:min-h-[400px] lg:min-h-[500px] min-w-[300px] w-1/2 md:w-1/3 lg:w-1/4 py-10">
          <h2 className="text-text text-3xl  font-roboto xl:text-4xl mx-auto text-center">
            Classic edition
          </h2>
          <h3 className="pl-6 text-text mt-5 text-xl xl:text-2xl ">
            7.99$/monthly
          </h3>
          <ul className="mt-5 text-md h-52  space-y-1 pl-6">
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
          </ul>
          <Purchase />
        </div>
        <div className="border-2 rounded-xl border-accent md:min-h-[400px] lg:min-h-[500px] min-w-[300px] w-1/2 md:w-1/3 lg:w-1/4 py-10">
          <h2 className="text-text text-3xl  font-roboto xl:text-4xl mx-auto text-center">
            Omniscient edition
          </h2>
          <h3 className="pl-6 text-text mt-5 text-xl xl:text-2xl ">
            14.99$/monthly
          </h3>
          <ul className="mt-5 text-md  h-52 space-y-1 pl-6">
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
            <Line text="Some feature" />
          </ul>
          <Purchase />
        </div>
      </div>
    </div>
  );
};
export default Pricing;
