type Props = {
  text: string;
};
import { HiCheck } from "react-icons/hi";
let Line = ({ text }: Props) => {
  return (
    <li>
      <div className="flex items-center space-x-2">
        <HiCheck className=" text-accent-400" /> <p className="ml-2">{text}</p>
      </div>
    </li>
  );
};
export default Line;
