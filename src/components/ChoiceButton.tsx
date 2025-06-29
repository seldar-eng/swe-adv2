import React from 'react';

interface ChoiceButtonProps {
  onClick: () => void;
  text: string;
  isCorrect?: boolean;
  disabled?: boolean;
  revealed?: boolean;
}

const ChoiceButton = React.forwardRef<HTMLButtonElement, ChoiceButtonProps>(
  ({ onClick, text, isCorrect, disabled, revealed }, ref) => {
    let buttonStyle = 'bg-[#7ED9F5] hover:bg-[#72C0E0]'; // Default style
    let textStyle = 'text-white';
    let hoverEffect = 'hover:-translate-y-1';
    let activeEffect = 'active:translate-y-0 active:shadow-sm';

    if (revealed) {
      hoverEffect = ''; // Disable hover transform when revealed
      activeEffect = '';  // Disable active transform when revealed
      if (isCorrect) {
        buttonStyle = 'bg-[#4CAF50] border-4 border-[#FFC107] scale-105'; // Correct answer style
        textStyle = 'text-white font-bold';
      } else {
        buttonStyle = 'bg-gray-300 border-gray-400'; // Incorrect answer style
        textStyle = 'text-gray-600 line-through'; // Visually strike through or dim
      }
    }

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled || revealed}
        className={`
          ${buttonStyle} ${textStyle}
          border-2 border-white/50 
          py-3 px-4 md:py-4 md:px-5 
          text-lg md:text-xl lg:text-2xl
          font-['Fredoka_One'] rounded-[18px]
          shadow-md 
          min-h-[70px] md:min-h-[80px]
          flex justify-center items-center text-center
          transition-all duration-300 ease-in-out
          ${!revealed ? hoverEffect : ''}
          ${!revealed ? activeEffect : ''}
          ${(disabled || revealed) ? 'opacity-70 cursor-not-allowed' : ''}
          whitespace-normal break-words
          focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:ring-opacity-50
        `}
      >
        {text}
      </button>
    );
  }
);

ChoiceButton.displayName = 'ChoiceButton';

export default ChoiceButton;