import React from 'react';
import { ViewState } from '../types';

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
}

// Declare gtag on window
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: { [key: string]: any }) => void;
  }
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const handleCardClick = (cardName: string, url: string) => {
    console.log('Card clicked:', cardName); // Debug log
    if (window.gtag) {
      window.gtag('event', 'card_click', {
        event_category: 'Dashboard',
        event_label: cardName,
        card_name: cardName,
        card_url: url
      });
    }
  };
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar -mt-4 pt-8 pb-8 px-4 bg-background-light dark:bg-background-dark relative z-0 animate-fade-in-up">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1: AI Translator */}
        <a
          href="https://hilton-ai-translator.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCardClick('AI Translator', 'https://hilton-ai-translator.vercel.app/')}
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left relative overflow-hidden animate-fadeInUp"
          style={{ animationDelay: '0ms' }}
        >
          {/* Background Image & Overlay */}
          <img src="/images/card-concierge.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-[0.5px]"></div>

          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>language</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-lg font-semibold leading-tight mb-1">AI Translator</h3>
            <p className="text-white text-xs italic">Real-time translation</p>
          </div>
        </a>

        {/* Card 2: Snap & Eat */}
        <a
          href="https://snap-and-eat.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCardClick('Snap & Eat', 'https://snap-and-eat.vercel.app/')}
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left relative overflow-hidden animate-fadeInUp"
          style={{ animationDelay: '100ms' }}
        >
          {/* Background Image & Overlay */}
          <img src="/images/card-food.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-[0.5px]"></div>

          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>photo_camera</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-lg font-semibold leading-tight mb-1">Snap & Eat</h3>
            <p className="text-white text-xs italic">Identify food instantly</p>
          </div>
        </a>

        {/* Card 3: Digital Concierge */}
        <a
          href="https://companion-revamp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCardClick('Digital Concierge', 'https://companion-revamp.vercel.app/')}
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left relative overflow-hidden animate-fadeInUp"
          style={{ animationDelay: '200ms' }}
        >
          {/* Background Image & Overlay */}
          <img src="/images/card-translator.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-[0.5px]"></div>

          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>luggage</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-lg font-semibold leading-tight mb-1">Digital Concierge</h3>
            <p className="text-white text-xs italic">Digital in-stay journey</p>
          </div>
        </a>

        {/* Card 4: AI Fitness Coach */}
        <a
          href="https://petershenfk.github.io/Smart-Fitness-Coach-New/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCardClick('Magic Mirror', 'https://petershenfk.github.io/Smart-Fitness-Coach-New/')}
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl shadow-premium hover:scale-[1.02] transition-transform duration-200 active:scale-95 h-44 w-full text-left relative overflow-hidden animate-fadeInUp"
          style={{ animationDelay: '300ms' }}
        >
          {/* Background Image & Overlay */}
          <img src="/images/card-fitness.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-[0.5px]"></div>

          <div className="flex items-center justify-center size-12 rounded-full bg-white text-black border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>fitness_center</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-lg font-semibold leading-tight mb-1">Magic Mirror</h3>
            <p className="text-white text-xs italic">Smart fitness coach</p>
          </div>
        </a>

        {/* Card 5: Placeholder 1 (Coming Soon) */}
        <div
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl bg-white/5 border border-dashed border-white/30 shadow-none h-44 w-full text-left animate-fadeInUp"
          style={{ animationDelay: '400ms' }}
        >
          <div className="flex items-center justify-center size-12 rounded-full bg-white/10 text-white/50">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
          </div>
          <div>
            <h3 className="text-white/80 text-lg font-semibold leading-tight mb-1">Coming Soon</h3>
            <p className="text-white/60 text-xs italic">More tools arriving...</p>
          </div>
        </div>

        {/* Card 6: Placeholder 2 (Coming Soon) */}
        <div
          className="group flex flex-col items-start justify-between gap-4 p-5 rounded-xl bg-white/5 border border-dashed border-white/30 shadow-none h-44 w-full text-left animate-fadeInUp"
          style={{ animationDelay: '500ms' }}
        >
          <div className="flex items-center justify-center size-12 rounded-full bg-white/10 text-white/50">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
          </div>
          <div>
            <h3 className="text-white/80 text-lg font-semibold leading-tight mb-1">Coming Soon</h3>
            <p className="text-white/60 text-xs italic">More tools arriving...</p>
          </div>
        </div>
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