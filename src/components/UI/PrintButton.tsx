import React from 'react';

interface PrintButtonProps {
  onClick: () => void;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full py-2.5 w-full max-w-[110px] text-[25px] mt-8 mb-2 text-lg font-bold rounded-sm cursor-pointer shadow-sm transition-colors bg-[#ffd633] hover:bg-[#f39c12] text-[#333] border-none"
      onClick={onClick}
    >
      PRINT
    </button>
  );
};
