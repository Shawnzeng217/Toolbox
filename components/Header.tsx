import React from 'react';

interface HeaderProps {
  onBack?: () => void;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBack, showBack = false }) => {
  return (
    <div className="bg-hilton-blue w-full pb-4 rounded-b-2xl shadow-lg relative z-10 transition-all duration-300">
      {/* Top App Bar */}
      <div className="flex items-center px-4 pt-10 pb-0 justify-between">
        {/* Left Action */}
        <button 
          onClick={onBack}
          className={`text-white/80 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors ${!showBack ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>

        {/* Center & Right sections cleared as requested */}
      </div>

      {/* Welcome Message - Only show on Home */}
      {!showBack && (
        <div className="px-6 pt-2 pb-2 text-center animate-fade-in">
          <h1 className="text-white font-serif text-2xl font-light leading-tight mb-1">
            Welcome to your <br /><span className="font-semibold text-[#8dc0ce]">StayExpert Toolbox.</span>
          </h1>
          <p className="text-white/80 text-xs font-display font-light leading-relaxed max-w-[280px] mx-auto">
            Everything you need for a seamless Stay.
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;