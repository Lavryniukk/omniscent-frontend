import FAQ from "@/app/UI/static/Memberships/Faq/Faq";
import PricingCards from "@/app/UI/static/Memberships/PricingCards/PricingCards";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cleverize • Memberships",
  description:
    "Cleverize offers a trial version, that gives you a certain amount of credits to spend, after which you can upgrade to a paid membership with monthly credit refill.",
};
let MembershipsPage = () => {
  return (
    <>
      <PricingCards />
      <FAQ
        faqArray={[
          {
            question: "How can I upgrade my membership to a higher level?",
            answer:
              "You can easily upgrade your membership by visiting your account settings and selecting the desired membership level. Follow the prompts to complete the upgrade process.",
          },
          {
            question: "What payment methods do you accept for memberships?",
            answer:
              "We accept credit cards, PayPal, and other secure payment methods for membership payments. Your payment information is always kept safe and encrypted.",
          },
          {
            question: "Is there a free trial available for your memberships?",
            answer:
              "Yes, we offer a 14-day free trial for our Premium and Pro memberships. You can try out the additional features before committing to a paid membership.",
          },
          {
            question: "Can I cancel my membership at any time?",
            answer:
              "Yes, you can cancel your membership at any time without any cancellation fees. Your membership will remain active until the end of your billing period.",
          },
          {
            question: "What happens if I forget my password for my account?",
            answer:
              "If you forget your password, you can use the 'Forgot Password' link on the login page to reset it. We'll send you instructions on how to create a new password.",
          },
        ]}
      />
    </>
  );
};
export default MembershipsPage;
