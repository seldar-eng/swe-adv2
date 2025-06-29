
import React from 'react';

interface SupportAgentProps {
  message: string;
  isActive: boolean;
}

const SupportAgent: React.FC<SupportAgentProps> = ({ message, isActive }) => {
  return (
    <div
      className={`
        fixed bottom-5 right-5 w-[180px] md:w-[200px] bg-white border-2 border-[#FFC107] 
        rounded-[18px] p-3 md:p-4 shadow-xl text-center z-[100]
        transition-transform transform duration-500 ease-out
        ${isActive ? 'translate-x-0' : 'translate-x-[250px] md:translate-x-[300px]'}
        hidden sm:block 
      `}
    >
      <p className="text-sm md:text-base text-gray-800 italic m-0">
        {message}
      </p>
    </div>
  );
};

export default SupportAgent;
