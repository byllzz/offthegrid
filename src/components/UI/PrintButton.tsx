import React from 'react';

interface PrintButtonProps {
  onClick: () => void;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full py-3.5 w-full max-w-[180px] mt-6 text-lg font-bold rounded-sm cursor-pointer shadow-sm transition-colors bg-[#f1c40f] hover:bg-[#f39c12] text-[#333] border-none"
      onClick={onClick}
    >
      PRINT
    </button>
  );
};
