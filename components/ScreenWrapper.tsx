
import React from 'react';

interface ScreenWrapperProps {
  isActive: boolean;
  children: React.ReactNode;
  testId?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ isActive, children, testId }) => {
  return (
    <div
      data-testid={testId}
      className={`
        w-full h-full flex flex-col justify-center items-center p-3 sm:p-5 box-border
        transition-opacity duration-500 ease-in-out
        ${isActive ? 'opacity-100 z-10 relative' : 'opacity-0 invisible pointer-events-none absolute top-0 left-0 -z-10'}
      `}
    >
      {children}
    </div>
  );
};

export default ScreenWrapper;
