import Image from "next/image";
import RatingAssembler from "../RatingAssebler/RatingAssembler";
import ReviewCardProps from "../../types/ReviewCardProps";

let ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  nickname,
  content,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={`lg:w-1/3 md:w-full max-h-54 border ${className} border-secondary-600 text-text p-5 rounded-lg space-y-5`}
    >
      <div className="flex justify-between items-center">
        <div>
          {/* Render the rating using the RatingAssembler function */}
          {RatingAssembler({ amount: rating })}
        </div>

        <div className={`flex justify-between items-center gap-2 `}>
          <Image
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full bg-center bg-contain"
            src={imageUrl}
            alt="Review profile picture"
          />{" "}
          {/* Display the reviewer's profile picture using the Next.js Image component */}
          <div>
            <div className="text-lg">{name}</div>{" "}
            {/* Display the reviewer's name */}
            <div className="text-accent text-sm">@{nickname}</div>{" "}
            {/* Display the reviewer's nickname */}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-accent">{content}</p>{" "}
        {/* Display the review content */}
      </div>
    </div>
  );
};

export default ReviewCard;
