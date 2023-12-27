// RatingAssembler is a component that generates star ratings based on the given 'amount'.
// It creates filled stars (AiFillStar) and outlined stars (AiOutlineStar) to represent the rating.

import { Star } from "lucide-react";

// 'amount' should be a number between 0 and 5, indicating the rating score.
let RatingAssembler: React.FC<{ amount: number }> = ({ amount }) => {
  if (amount <= 5) {
    // Create arrays for filled and outlined stars based on the 'amount'.
    let filled = Array(amount).fill(0);
    let outlined = Array(5 - amount).fill(1);
    const stars = [...filled, ...outlined];

    return (
      <div className="flex">
        {stars.map((item, index) => {
          if (item === 0) {
            // Render filled star icon for a filled star.
            return <Star key={index} className="text-primary" />;
          } else if (item === 1) {
            // Render outlined star icon for an outlined star.
            return <Star key={index} className="text-accent-600" />;
          }
        })}
      </div>
    );
  } else {
    // Throw an error if 'amount' is greater than 5.
    throw new Error("Amount of stars must be less than 5");
  }
};

export default RatingAssembler;
