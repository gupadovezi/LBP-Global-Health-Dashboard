import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import OverviewView from './components/OverviewView';
import DiagnosticsView from './components/DiagnosticsView';
import EconomicsView from './components/EconomicsView';
import { TabView } from './types';
import { Globe } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.OVERVIEW);

  const renderContent = () => {
    switch (activeTab) {
      case TabView.OVERVIEW:
        return <OverviewView />;
      case TabView.DIAGNOSTICS:
        return <DiagnosticsView />;
      case TabView.ECONOMICS:
        return <EconomicsView />;
      case TabView.BURDEN:
        // Re-using Overview logic for Burden focused view or simply show overview
        // In a real app, this would be a detailed demographic breakdown
        return <OverviewView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-10 shadow-sm flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {activeTab === TabView.OVERVIEW && 'Executive Summary'}
              {activeTab === TabView.BURDEN && 'Global Burden of Disease'}
              {activeTab === TabView.DIAGNOSTICS && 'Diagnostic & Imaging Analysis'}
              {activeTab === TabView.ECONOMICS && 'Health Economics & Costs'}
            </h1>
            <p className="text-sm text-slate-500">
              Low Back Pain: Impact, Costs, and Clinical Challenges
            </p>
          </div>
          <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
               <p className="text-xs font-bold text-slate-700">World Health Data</p>
               <p className="text-[10px] text-slate-400">Updated: 2018 (The Lancet)</p>
             </div>
             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
               <Globe size={20} />
             </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;