import { HiCheck } from "react-icons/hi";

// Props type definition for the Line component.
type Props = {
  text: string;
};

// Line component displays a list item with a checkmark icon and text.
let Line = ({ text }: Props) => {
  return (
    <li>
      <div className="flex items-center space-x-2">
        <HiCheck className="text-accent-400" /> {/* Checkmark icon */}
        <p className="ml-2">{text}</p> {/* Text content */}
      </div>
    </li>
  );
};

export default Line;
