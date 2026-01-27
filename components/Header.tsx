import React from 'react';

interface HeaderProps {
  onBack?: () => void;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBack, showBack = false }) => {
  return (
    <div className="bg-hilton-blue w-full rounded-b-2xl shadow-lg relative z-10 transition-all duration-300 min-h-[88px] flex flex-col justify-center">
      {/* Top App Bar - Absolute to not affect centering */}
      <div className="absolute top-0 left-0 w-full flex items-center px-4 pt-4 justify-between z-20">
        {/* Left Action */}
        <button
          onClick={onBack}
          className={`text-white/80 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors ${!showBack ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
      </div>

      {/* Welcome Message - Only show on Home */}
      {!showBack && (
        <div className="px-6 text-center animate-fade-in pt-2">
          <h1 className="font-serif text-2xl font-light leading-tight">
            <span className="text-[#8dc0ce] block">Welcome to your</span>
            <span className="text-white font-semibold">Hilton Guest Hub</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;