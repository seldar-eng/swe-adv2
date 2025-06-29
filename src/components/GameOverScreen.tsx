import React from 'react';
import PrimaryButton from './PrimaryButton';
import LoadingSpinner from './LoadingSpinner'; // Assume this component exists

interface GameOverScreenProps {
  finalScore: number;
  onPlayAgain: () => void;
  story: string | null;
  isStoryLoading: boolean;
  storyError: string | null;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ 
  finalScore, 
  onPlayAgain,
  story,
  isStoryLoading,
  storyError
}) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="font-['Fredoka_One'] text-gray-800 text-3xl sm:text-4xl md:text-5xl mb-5 md:mb-7">
        Grattis! (Congratulations!)
      </h2>
      <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-4">
        You've completed all Swedish Adventures!
      </p>
      <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
        Your total score: <span className="font-bold text-[#FFC107]">{finalScore}</span> stars!
      </p>

      <div className="bg-yellow-100/50 border-2 border-[#FFC107] rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg min-h-[100px] w-full max-w-md">
        <h3 className="font-['Fredoka_One'] text-[#FF69B4] text-xl md:text-2xl mb-2">Your Special Adventure Story!</h3>
        {isStoryLoading && <LoadingSpinner />}
        {!isStoryLoading && storyError && <p className="text-red-500 text-sm">{storyError}</p>}
        {!isStoryLoading && !storyError && story && (
          <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap">{story}</p>
        )}
         {!isStoryLoading && !storyError && !story && (
            <p className="text-gray-400 text-sm">No story could be conjured this time, but you're still a hero!</p>
          )}
      </div>

      <PrimaryButton onClick={onPlayAgain}>
        Play Again?
      </PrimaryButton>
    </div>
  );
};

export default GameOverScreen;