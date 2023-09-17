import FAQItem from "@/app/components/FAQComponents/FAQItem";

let PricingFAQ = () => {
  return (
    <div
      className="space-y-10 select-none pricing overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
  w-full my-60 h-fit justify-around items-center"
    >
      <h2 className="text-4xl sm:text-5xl  font-roboto mx-auto font-bold text-center text-text">
        FAQ
      </h2>

      <div className="sm:p-8 p-4 space-y-5">
        <FAQItem
          question="How much does your product/service cost?"
          answer="Our pricing varies depending on the plan you choose. Please visit our pricing page for detailed information."
        />

        <FAQItem
          question="Do you offer a free trial?"
          answer="Yes, we provide a free trial for 14 days so you can explore our features before committing."
        />

        <FAQItem
          question="Is there a discount for annual subscriptions?"
          answer="Absolutely! We offer significant discounts for annual subscriptions compared to monthly plans."
        />

        <FAQItem
          question="Can I change my plan later?"
          answer="Yes, you can upgrade or downgrade your plan at any time to suit your changing needs."
        />

        <FAQItem
          question="What payment methods do you accept?"
          answer="We accept major credit cards, PayPal, and other secure payment options for your convenience."
        />
      </div>
    </div>
  );
};

export default PricingFAQ;
