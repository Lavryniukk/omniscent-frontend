import FAQ from "@/app/modules/Faq/Faq";
import PricingCards from "@/app/modules/PricingCards/PricingCards";

let MembershipsPage = () => {
  return (
    <>
      <PricingCards />
      <FAQ
        faqArray={[
          { question: "card", answer: "card" },
          { question: "card", answer: "card" },
        ]}
      />
    </>
  );
};
export default MembershipsPage;
