import { AiFillStar, AiOutlineStar } from "react-icons/ai";

let RatingAssembler: React.FC<{ amount: number }> = ({ amount }) => {
  if (amount <= 5) {
    let filled = Array(amount).fill(0);
    let outlined = Array(5 - amount).fill(1);
    const stars = [...filled, ...outlined];

    return (
      <div className="flex">
        {stars.map((item, index) => {
          if (item === 0) {
            return <AiFillStar key={index} className="text-primary" />;
          } else if (item === 1) {
            return <AiOutlineStar key={index} className="text-accent-600" />;
          }
        })}
      </div>
    );
  } else {
    throw new Error("Amount of stras must be less than 5");
  }
};

export default RatingAssembler;
