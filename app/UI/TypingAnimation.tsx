'use client'
import { useState, useEffect } from 'react';

const professions = [
  "Development",
  "Science",
  "Design",
  "Marketing",
  "Design",
  "Design",
  "Cybersecurity",
  "Writing",
  "Photography",
  "Editing",
  "Production",
  "Animation",
  "Design",
  "Management",
  "Finance"
];

const TypingAnimation: React.FC = () => {
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const profession = professions[currentProfessionIndex];
    let intervalId: NodeJS.Timeout;

    if (isTyping) {
      intervalId = setInterval(() => {
        setCurrentCharacterIndex((prevIndex) => prevIndex + 1);

        // Check if the whole word is typed
        if (currentCharacterIndex === profession.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentCharacterIndex(profession.length);
          }, 500); // Pause before erasing
        }
      }, 175);
    } else {
      intervalId = setInterval(() => {
        setCurrentCharacterIndex((prevIndex) => prevIndex - 1);

        // Check if all characters are erased
        if (currentCharacterIndex === 0) {
          clearInterval(intervalId);
          setIsTyping(true);
          setCurrentProfessionIndex((prevIndex) =>
            (prevIndex + 1) % professions.length
          );
        }
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [currentProfessionIndex, currentCharacterIndex, isTyping]);

  const currentProfession = professions[currentProfessionIndex];
  const displayedText = currentProfession.substring(0, currentCharacterIndex);

  return (
    <h1 className="text-md sm:text-lg md:text-2xl mt-10 mx-auto font-roboto w-80 lg:w-1/3 font-light text-accent text-center ">
      I want to learn <span className=''>{displayedText}</span>
    </h1>
  );
};

export default TypingAnimation;
