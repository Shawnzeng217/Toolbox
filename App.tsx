import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';
import ImageEditor from './components/ImageEditor';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    setCurrentView('HOME');
  };

  return (
    <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col overflow-hidden shadow-2xl bg-background-dark">
      <Header 
        showBack={currentView !== 'HOME'} 
        onBack={handleBack}
      />
      
      {currentView === 'HOME' && <Dashboard onNavigate={handleNavigate} />}
      {currentView === 'DIGITAL_MEMORY' && <ImageEditor />}

      <BottomNav currentView={currentView} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;