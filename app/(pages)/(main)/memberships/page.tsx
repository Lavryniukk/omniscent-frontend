import FAQ from "@/app/UI/static/Memberships/Faq/Faq";
import PricingCards from "@/app/UI/static/Memberships/PricingCards/PricingCards";

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
