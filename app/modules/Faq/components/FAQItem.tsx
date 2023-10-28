import { BsChevronDown } from "react-icons/bs";
import { MouseEventHandler, useState } from "react";

// Define the 'Props' type to specify the expected properties for the 'FAQItem' component
type Props = { question: string; answer: string };

// Define the 'FAQItem' functional component that displays a FAQ item
let FAQItem = ({ question, answer }: Props) => {
  // Define a state variable 'isOpen' and a function 'setIsOpen' to manage the open/closed state of the FAQ item
  const [isOpen, setIsOpen] = useState(false);

  // Define a function 'handleClick' to toggle the 'isOpen' state when the FAQ item is clicked
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className={`border-x-[1.5px] border-accent font-inter font-light lg:w-4/6 sm:w-5/6  text-text-300 mx-auto ${
        // Dynamically set the height and transition effect based on the 'isOpen' state
        !isOpen ? "h-12" : "sm:h-32 h-36"
      } sm:px-2 px-1 transition-all duration-500 overflow-hidden lg:text-lg sm:text-base text-[13px]`}
      // Attach the 'handleClick' function to the 'onClick' event of the container
    >
      <div className="flex justify-between items-center mb-4 h-12">
        <div>{question}</div> {/* Display the question */}
        <div className={`${isOpen ? "rotate-180" : "rotate-0"}`}>
          <BsChevronDown />{" "}
          {/* Display the chevron-down icon, with rotation based on 'isOpen' state */}
        </div>
      </div>

      <div
        className={`py-1 ${
          // Control the opacity and visibility based on 'isOpen' state for the answer content
          isOpen ? "opacity-80" : "opacity-0"
        } transition-opacity duration-500 text-text font-inter font-extralight`}
      >
        {answer} {/* Display the answer content */}
      </div>
    </div>
  );
};

export default FAQItem;
