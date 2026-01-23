import React from 'react';
import { ViewState } from '../types';

interface BottomNavProps {
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  return (
    <div className="bg-[#172f36] border-t border-[#20424b] px-6 py-2 flex justify-between items-center absolute bottom-0 w-full max-w-md backdrop-blur-md bg-opacity-95 z-20 pb-5">
      <button 
        onClick={() => onNavigate('HOME')}
        className={`flex flex-col items-center justify-center gap-0.5 group w-16 transition-colors ${currentView === 'HOME' ? 'text-white' : 'text-[#8dc0ce]/60 hover:text-[#8dc0ce]'}`}
      >
        <div className={`flex items-center justify-center p-1 rounded-full transition-colors ${currentView === 'HOME' ? '' : 'group-hover:bg-[#8dc0ce]/10'}`}>
          <span className={`material-symbols-outlined ${currentView === 'HOME' ? 'filled' : ''}`}>home</span>
        </div>
        <span className="text-[10px] font-medium tracking-wide">Home</span>
      </button>

      <button className="flex flex-col items-center justify-center gap-0.5 text-[#8dc0ce]/60 hover:text-[#8dc0ce] transition-colors group w-16">
        <div className="flex items-center justify-center p-1 rounded-full group-hover:bg-[#8dc0ce]/10 transition-colors">
          <span className="material-symbols-outlined">bed</span>
        </div>
        <span className="text-[10px] font-medium tracking-wide">My Stay</span>
      </button>

      <button className="flex flex-col items-center justify-center gap-0.5 text-[#8dc0ce]/60 hover:text-[#8dc0ce] transition-colors group w-16">
        <div className="flex items-center justify-center p-1 rounded-full group-hover:bg-[#8dc0ce]/10 transition-colors">
          <span className="material-symbols-outlined">person</span>
        </div>
        <span className="text-[10px] font-medium tracking-wide">Profile</span>
      </button>
    </div>
  );
};

export default BottomNav;