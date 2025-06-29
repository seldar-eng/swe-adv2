
import React from 'react';
import PrimaryButton from './PrimaryButton';

interface LevelCompleteScreenProps {
  levelNumber: number;
  levelScore: number;
  onNextLevel: () => void;
  isLastLevel: boolean;
  onGameOver: () => void;
}

const LevelCompleteScreen: React.FC<LevelCompleteScreenProps> = ({ 
  levelNumber, 
  levelScore, 
  onNextLevel,
  isLastLevel,
  onGameOver 
}) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="font-['Fredoka_One'] text-gray-800 text-3xl sm:text-4xl md:text-5xl mb-5 md:mb-7">
        Level Complete! Bra Jobbat!
      </h2>
      <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">
        You completed Level <span className="font-bold text-[#FF69B4]">{levelNumber}</span> and earned <span className="font-bold text-[#FFC107]">{levelScore}</span> stars in this level!
      </p>
      <PrimaryButton onClick={isLastLevel ? onGameOver : onNextLevel}>
        {isLastLevel ? "See Final Score!" : "Next Adventure!"}
      </PrimaryButton>
    </div>
  );
};

export default LevelCompleteScreen;
