
import React from 'react';
import PrimaryButton from './PrimaryButton';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="font-['Fredoka_One'] text-gray-800 text-3xl sm:text-4xl md:text-5xl mb-5 md:mb-7">
        Välkommen! (Welcome!)
      </h2>
      <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-md">
        Learn Swedish words and connect with your family!
      </p>
      <PrimaryButton onClick={onStart}>
        Start Your Adventure!
      </PrimaryButton>
    </div>
  );
};

export default StartScreen;
