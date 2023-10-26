"use client";
import FAQItem from "@/app/modules/Faq/components/FAQItem";
import { FAQProps } from "./consts/FaqProps";

// FAQ component
let FAQ: React.FC<FAQProps> = ({ faqArray }) => {
  return (
    <div
      className="space-y-10 select-none pricing overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
  w-full my-32 h-fit justify-around items-center "
    >
      <h2 className="text-4xl sm:text-5xl observe duration-500 transition-all font-inter mx-auto font-bold text-center text-text">
        FAQ
      </h2>
      <div className="sm:p-8 p-4 space-y-5 ">
        {/* Check if there are FAQs in the array */}
        {faqArray.length > 0 ? (
          // If there are FAQs, map through the array to render each FAQItem
          faqArray.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))
        ) : (
          // If the array is empty, display a message
          <div className="text-text">List is empty</div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
