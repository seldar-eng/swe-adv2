
import React from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-[#FF69B4] text-white border-2 border-white/50
        py-3 px-6 md:py-4 md:px-10 
        text-base md:text-lg lg:text-xl
        font-['Fredoka_One'] rounded-[25px] cursor-pointer
        transition-all duration-300 ease-in-out
        shadow-lg hover:shadow-xl
        hover:bg-[#FF4D94] hover:-translate-y-1.5 
        active:translate-y-[-2px] active:shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg
        uppercase tracking-wider
        focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
