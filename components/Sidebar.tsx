
import React from 'react';
import { Level } from '../types';

interface SidebarProps {
  totalScore: number;
  currentLevelDisplay: number; // 1-based
  levels: Level[];
  onSelectLevel: (levelIndex: number) => void;
}

const SidebarSection: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
  <div className="w-full text-center bg-gray-100 rounded-[18px] p-4 md:p-5 shadow-inner_sm">
    <h3 className="font-['Fredoka_One'] text-[#FF69B4] text-xl md:text-2xl mb-2 md:mb-3 text-shadow-[1px_1px_0_rgba(0,0,0,0.05)]">
      {title}
    </h3>
    {children}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ totalScore, currentLevelDisplay, levels, onSelectLevel }) => {
  return (
    <div className="w-full lg:w-1/3 bg-white/90 rounded-[25px] p-5 md:p-7 flex flex-col items-center gap-6 md:gap-10 shadow-lg border-2 border-white/50 overflow-y-auto max-h-[90vh] lg:max-h-full">
      <SidebarSection title="Total Stars">
        <span className="font-['Fredoka_One'] text-3xl md:text-4xl lg:text-5xl text-[#FFC107] block mt-1 md:mt-2">
          {totalScore}
        </span>
      </SidebarSection>
      
      <SidebarSection title="Current Level">
        <span className="font-['Fredoka_One'] text-3xl md:text-4xl lg:text-5xl text-[#FFC107] block mt-1 md:mt-2">
          {currentLevelDisplay > levels.length ? levels.length : currentLevelDisplay === 0 ? 1 : currentLevelDisplay} 
        </span>
      </SidebarSection>

      <div className="w-full text-left bg-gray-100 rounded-[18px] p-4 md:p-5 shadow-inner_sm">
        <h3 className="font-['Fredoka_One'] text-[#FF69B4] text-xl md:text-2xl mb-3 md:mb-5 text-shadow-[1px_1px_0_rgba(0,0,0,0.05)] text-center">
          Choose Adventure
        </h3>
        <div className="space-y-2 max-h-[30vh] lg:max-h-[40vh] overflow-y-auto pr-2">
          {levels.map((level, index) => (
            <button
              key={level.id}
              onClick={() => onSelectLevel(index)}
              className="
                block w-full bg-[#CCE5FF] text-gray-800 
                text-sm md:text-base lg:text-lg
                py-2 px-3 md:py-3 md:px-4
                rounded-xl shadow-sm hover:shadow-md
                border border-white/50
                transition-all duration-200 ease-in-out
                font-['Fredoka_One']
                hover:bg-[#B2D8FF] hover:-translate-y-0.5
                active:translate-y-0 active:shadow-xs
                focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:ring-opacity-50 text-left
              "
            >
              {index + 1}. {level.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
