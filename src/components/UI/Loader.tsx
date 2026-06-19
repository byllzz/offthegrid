import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if loader was already shown in this session
    const hasSeenLoader = sessionStorage.getItem('offthegrid-loader-shown');

    if (hasSeenLoader) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      sessionStorage.setItem('offthegrid-loader-shown', 'true');
      setIsVisible(false);
      onComplete?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-white transition-opacity duration-500">
      {/* Loader grid */}
      <div className="grid grid-cols-3 gap-[5px] w-[70px] h-[70px]">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="w-full h-full bg-[#a5a5b0] animate-blink"
            style={{
              animationDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>

      {/* Brand name */}
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#1a1a2e] font-script">OffTheGrid</h1>
        <p className="mt-1 text-xs text-gray-400">GRID PAPER GENERATOR</p>
      </div>
    </div>
  );
};
