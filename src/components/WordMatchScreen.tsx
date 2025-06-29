
import React from 'react';
import ChoiceButton from './ChoiceButton';
// LoadingSpinner is no longer needed here if only used for images
import { WordPair } from '../types';

interface WordMatchScreenProps {
  currentQuestion: WordPair;
  choices: string[];
  onChoiceSelected: (choice: string, buttonRef: HTMLButtonElement) => void;
  questionNumber: number;
  totalQuestions: number;
  isChoiceDisabled: boolean;
  correctAnswer?: string | null;
}

const WordMatchScreen: React.FC<WordMatchScreenProps> = ({
  currentQuestion,
  choices,
  onChoiceSelected,
  questionNumber,
  totalQuestions,
  isChoiceDisabled,
  correctAnswer,
}) => {
  const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <div className="w-full max-w-xl lg:max-w-2xl flex flex-col items-center">
      <div className="mb-6 md:mb-10 text-center">
        <div className="text-base md:text-lg text-gray-600 font-bold mb-2 md:mb-3">
          Question {questionNumber} of {totalQuestions}
        </div>
        
        {/* Image display section removed */}

        <p className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 text-shadow-[2px_2px_0_rgba(0,0,0,0.08)] pt-8 md:pt-12">
          {currentQuestion.english}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
        {choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            text={choice}
            onClick={() => {
              if (buttonRefs.current[index]) {
                 onChoiceSelected(choice, buttonRefs.current[index] as HTMLButtonElement);
              }
            }}
            disabled={isChoiceDisabled}
            isCorrect={correctAnswer === choice}
            revealed={!!correctAnswer}
            ref={el => { buttonRefs.current[index] = el; }}
          />
        ))}
      </div>
    </div>
  );
};

export default WordMatchScreen;