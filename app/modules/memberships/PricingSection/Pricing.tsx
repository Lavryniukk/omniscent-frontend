import Cards from "@/app/components/pricingComponents/PricingCards";

let Pricing = () => {
  return (
    <div className="w-full border-secondary h-fit from-slate-950 to-background">
      <div className="box-border items-end justify-around w-full lg:px-10 mx-auto my-10 md:my-20 xl:my-32 bg-transparent select-none max-w-10xl h-fit">
        <h2 className="mx-auto my-20 select-text tracking-tighter h-fit font-bold text-center bg-gradient-to-t from-text-100 via-text-200 to-text-400 text-transparent bg-clip-text text-4xl sm:text-5xl md:text-7xl font-roboto">
          Choose a plan that
          <br /> fits your style
        </h2>
        <Cards />
      </div>
    </div>
  );
};
export default Pricing;
