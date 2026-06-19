import React from 'react';

interface PrintButtonProps {
  onClick: () => void;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full py-2.5 w-full max-w-[110px] text-[25px] mt-8 mb-2 text-lg font-bold rounded-sm cursor-pointer shadow-sm transition-colors bg-(--primary-color) hover:shadow-xl active:shadow-none text-black border-none"
      onClick={onClick}
    >
      PRINT
    </button>
  );
};
