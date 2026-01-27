import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import ImageEditor from './components/ImageEditor';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const handleNavigate = (view: ViewState) => {
    setDirection('forward');
    setCurrentView(view);
  };

  const handleBack = () => {
    setDirection('backward'); // When going back, we want the previous screen (Home) to slide in from left? Or just fade?
    // Typical iOS push: new screen from right. Back: old screen static, top screen slides right.
    // Making this simple: Home slides in from Left.
    setCurrentView('HOME');
  };

  const getAnimationClass = () => {
    // Initial load
    if (typeof window === 'undefined') return 'animate-fadeIn';

    if (currentView === 'HOME' && direction === 'backward') return 'animate-slideInLeft';
    if (currentView !== 'HOME') return 'animate-slideInRight';
    return 'animate-fadeIn';
  };

  return (
    <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col overflow-hidden shadow-2xl bg-background-dark">
      <Header
        showBack={currentView !== 'HOME'}
        onBack={handleBack}
      />

      {/* Main Content Area with Animation */}
      <div
        key={currentView}
        className={`flex-1 flex flex-col w-full overflow-hidden ${getAnimationClass()}`}
      >
        {currentView === 'HOME' && <Dashboard onNavigate={handleNavigate} />}
        {currentView === 'DIGITAL_MEMORY' && <ImageEditor />}
      </div>


    </div>
  );
};

export default App;