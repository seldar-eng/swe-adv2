import React from 'react';

interface GameHeaderProps {
  narratorMessage: string;
}

// Simple Dala Horse SVG icon
const DalaHorseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    width="48" 
    height="48" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M85.71,43.35C82.5,36.43,76,29.57,68.86,27.26c-5.71-1.71-11.43-1.43-16.86,0.57 C46,30.12,40.86,33.83,37.14,39.08c-1.71,2.57-3.14,5.14-4.29,8c-1.14,3.14-2,6.29-2.29,9.71 c-0.29,3.43-0.29,7.14,0.57,10.57c1.14,4.57,3.43,8.57,6.57,12c2.29,2.57,5.14,4.57,8.29,5.71 C51.43,87.78,57.14,88,63,87.12c6.29-1.14,11.71-4.29,16-8.86c3.14-3.43,5.14-7.71,6.29-12.29 C86.57,61.12,86.86,56.12,85.71,43.35z M30.57,53.08c0-5.71,2.29-10.86,6-14.57c2.29-2.29,5.14-3.71,8.29-4.29 c2.29-0.57,4.57-0.86,6.86-0.86c4.57,0,8.86,1.43,12.29,4c2.29,1.71,4,3.71,5.14,6c1.14,2.29,1.71,4.86,1.71,7.43 c0,3.43-0.86,6.57-2.29,9.43c-1.43,2.86-3.43,5.14-5.71,7.14c-2.57,2-5.43,3.43-8.57,4 C53.71,79.55,49.43,80,45.14,79.12c-4.29-0.86-8.29-2.86-11.43-5.71C31.43,70.69,30.57,66.98,30.57,53.08z" fill="#D9534F"/>
    <path d="M29.14,69.5c-2.29-4-3.71-8.57-4-13.43c-0.29-4.57,0.57-9.14,2.29-13.14c0.57-1.43,1.14-2.86,2-4 c-3.14,4.29-4.86,9.43-4.86,15c0,6,2,11.43,5.14,15.71L29.14,69.5z" fill="#C94A47"/>
    <path d="M68.57,27.35c-2.57,0.29-5.14,1.14-7.43,2.29c-2.86,1.43-5.43,3.43-7.43,5.71 c-0.86,0.86-1.71,1.71-2.29,2.86c2-2.57,4.29-4.86,6.86-6.57c2.86-2,6-3.14,9.43-3.43L68.57,27.35z" fill="#C94A47"/>
  </svg>
);


const GameHeader: React.FC<GameHeaderProps> = ({ narratorMessage }) => {
  return (
    <header className="mb-4 md:mb-8 relative z-10 text-center">
      <div className="flex items-center justify-center mb-2 md:mb-4">
        <DalaHorseIcon className="w-10 h-10 md:w-12 md:h-12 mr-2 md:mr-3 text-[#FF69B4]" />
        <h1 className="font-['Fredoka_One'] text-[#FF69B4] text-3xl sm:text-4xl md:text-5xl lg:text-[3.2em] text-shadow-[4px_4px_0_rgba(0,0,0,0.1)] tracking-wider">
          Swedish adventures for Lucas and Linus
        </h1>
      </div>
      <div 
        id="narrator"
        aria-live="polite" // Added for accessibility
        aria-atomic="true"
        className="bg-gray-100 border-l-8 border-[#FF69B4] p-3 md:p-4 rounded-md md:rounded-lg italic text-gray-800 min-h-[50px] md:min-h-[60px] flex items-center justify-center text-sm md:text-base lg:text-lg shadow-inner_md mt-4 md:mt-6"
      >
        {narratorMessage}
      </div>
    </header>
  );
};

export default GameHeader;