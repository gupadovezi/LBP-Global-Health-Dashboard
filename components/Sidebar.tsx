import React from 'react';
import { LayoutDashboard, Globe, Stethoscope, CircleDollarSign, Activity } from 'lucide-react';
import { TabView } from '../types';

interface SidebarProps {
  activeTab: TabView;
  setActiveTab: (tab: TabView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: TabView.OVERVIEW, label: 'Executive Summary', icon: LayoutDashboard },
    { id: TabView.BURDEN, label: 'Global Burden (DALY)', icon: Globe },
    { id: TabView.DIAGNOSTICS, label: 'Diagnostics & Imaging', icon: Stethoscope },
    { id: TabView.ECONOMICS, label: 'Health Economics', icon: CircleDollarSign },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-full shadow-xl">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xl">
          <Activity size={24} />
          <span>LBP Analytics</span>
        </div>
        <p className="text-xs text-slate-400 mt-2">Based on The Lancet Series</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-lg p-3">
          <p className="text-xs text-slate-400 font-medium mb-1">Data Source</p>
          <p className="text-xs text-slate-500 truncate">Hartvigsen et al. (2018)</p>
          <p className="text-xs text-slate-500">The Lancet</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;