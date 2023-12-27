import { Check } from "lucide-react";

// Props type definition for the Line component.
type Props = {
  text: string;
};

// Line component displays a list item with a checkmark icon and text.
let Line = ({ text }: Props) => {
  return (
    <li>
      <div className="flex font-inter items-center text-text space-x-2">
        <Check size={16} className="text-text" /> {/* Checkmark icon */}
        <p className="ml-2">{text}</p> {/* Text content */}
      </div>
    </li>
  );
};

export default Line;
