import { HiCheck } from "react-icons/hi";

// Props type definition for the Line component.
type Props = {
  text: string;
};

// Line component displays a list item with a checkmark icon and text.
let Line = ({ text }: Props) => {
  return (
    <li>
      <div className="flex font-inter items-center text-text space-x-2">
        <HiCheck size={20} className="text-text" /> {/* Checkmark icon */}
        <p className="ml-2">{text}</p> {/* Text content */}
      </div>
    </li>
  );
};

export default Line;
