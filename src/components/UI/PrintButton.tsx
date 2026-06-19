import React from 'react';

interface PrintButtonProps {
  onClick: () => void;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full max-w-[110px] py-2.5 mt-8 mb-2 text-lg font-bold text-black transition-all duration-300 bg-(--primary-color) border-none rounded-sm cursor-pointer shadow-sm hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] active:shadow-none"
      onClick={onClick}
    >
      PRINT
    </button>
  );
};
