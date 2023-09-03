type Props = {
  text: string;
};
let Line = ({ text }: Props) => {
  return (
    <li className="text-accent before:content-['-'] before:mr-1 font-light">
      {text}
    </li>
  );
};
export default Line;
