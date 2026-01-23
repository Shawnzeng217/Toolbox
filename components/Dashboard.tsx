import React from 'react';
import { ViewState } from '../types';

interface DashboardProps {
    onNavigate: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar -mt-4 pt-8 pb-32 px-4 bg-background-light dark:bg-background-dark relative z-0 animate-fade-in-up">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1: AI Translator */}
        <a 
          href="https://translator-test-steel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl bg-hilton-off-white shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left"
        >
          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>language</span>
          </div>
          <div>
            <h3 className="text-hilton-blue text-base font-semibold leading-tight mb-1">AI Translator</h3>
            <p className="text-gray-500 text-xs font-medium">Real-time translation</p>
          </div>
        </a>

        {/* Card 2: Snap & Eat */}
        <a 
          href="https://snap-eat-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl bg-hilton-off-white shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left"
        >
          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>photo_camera</span>
          </div>
          <div>
            <h3 className="text-hilton-blue text-base font-semibold leading-tight mb-1">Snap & Eat</h3>
            <p className="text-gray-500 text-xs font-medium">Identify food instantly</p>
          </div>
        </a>

        {/* Card 3: Menu Scan */}
        <button className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl bg-hilton-off-white shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left">
          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>restaurant_menu</span>
          </div>
          <div>
            <h3 className="text-hilton-blue text-base font-semibold leading-tight mb-1">Menu Scan</h3>
            <p className="text-gray-500 text-xs font-medium">Scan & translate</p>
          </div>
        </button>

        {/* Card 4: AI Fitness Coach */}
        <button className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl bg-hilton-off-white shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left">
          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>fitness_center</span>
          </div>
          <div>
            <h3 className="text-hilton-blue text-base font-semibold leading-tight mb-1">AI Fitness</h3>
            <p className="text-gray-500 text-xs font-medium">Personalized workout</p>
          </div>
        </button>

        {/* Card 5: Digital Memory (Full Width) */}
        <button 
            onClick={() => onNavigate('DIGITAL_MEMORY')}
            className="group col-span-2 flex flex-row items-center justify-start gap-5 p-5 rounded-xl bg-hilton-off-white shadow-premium hover:scale-[1.01] transition-transform duration-200 active:scale-95 h-24 w-full text-left relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/50 to-transparent"></div>
          
          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors shrink-0 z-10">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>auto_awesome</span>
          </div>
          <div className="z-10">
            <h3 className="text-hilton-blue text-lg font-semibold leading-tight mb-1">Digital Memory</h3>
            <p className="text-gray-500 text-xs font-medium">Capture your moments forever</p>
          </div>
        </button>
      </div>

      {/* Promo Banner */}
      <div className="mt-6 rounded-xl overflow-hidden relative h-32 w-full shadow-lg group cursor-pointer">
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB26nqtU_Z30VKwpvXx2KZyEF--Vd2H2GVjctSHZyYLmXcZV05Q2W2xL-P3zRLj10ae3tNYa9_EbkOfjr4fqLnan5PljtBQRg8X2sZx8wLr99psmoJxzn9bMs9PJxSdyIhBkFtk4W1p3Fb9Z3Oz0bYDHGZEQ9lVcG89CvGqtkHFruPv6FglT4AsV7Cd-IV6YWEvMJKJKsvdv56mbYqEa2MHjY1hoYzizkMHtBOXRkQZ-harzEpf9kLQjk8bDey2tA8P_lYGEkqsAyxb')" }}
        ></div>
        <div className="absolute inset-0 bg-hilton-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6">
          <p className="text-[#8dc0ce] text-xs font-bold uppercase tracking-wider mb-1">Exclusive Offer</p>
          <h3 className="text-white text-xl font-serif font-medium">Dining Rewards</h3>
          <div className="flex items-center gap-2 mt-2 text-white text-sm font-medium group-hover:underline decoration-1 underline-offset-4">
            <span>Learn more</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;