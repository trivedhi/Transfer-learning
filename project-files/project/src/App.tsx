import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ImageClassifier } from './components/ImageClassifier';
import { DiseaseDatabase } from './components/DiseaseDatabase';
import { Analytics } from './components/Analytics';
import { About } from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'classify':
        return <ImageClassifier />;
      case 'diseases':
        return <DiseaseDatabase />;
      case 'analytics':
        return <Analytics />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;