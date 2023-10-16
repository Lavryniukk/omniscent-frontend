"use client";
import FAQItem from "@/app/modules/Faq/components/FAQItem";
import { FAQProps } from "./consts/FaqProps";

let FAQ: React.FC<FAQProps> = ({ faqArray }) => {
  return (
    <div
      className="space-y-10 select-none pricing overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
  w-full my-32 h-fit justify-around items-center "
    >
      <h2 className="text-4xl sm:text-5xl font-roboto mx-auto font-bold text-center text-text">
        FAQ
      </h2>
      <div className="sm:p-8 p-4 space-y-5">
        {faqArray.length > 0 ? (
          faqArray.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))
        ) : (
          <div className="text-text">List is empty</div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
