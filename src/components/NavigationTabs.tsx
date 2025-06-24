
import { Activity, Brain, Trophy, Download } from "lucide-react";

interface NavigationTabsProps {
  activeTab: 'dashboard' | 'analytics' | 'achievements' | 'export';
  setActiveTab: (tab: 'dashboard' | 'analytics' | 'achievements' | 'export') => void;
}

export const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {
  const tabs = [
    { id: 'dashboard', label: 'Tablo De Bò', icon: <Activity size={16} /> },
    { id: 'analytics', label: 'Analytics', icon: <Brain size={16} /> },
    { id: 'achievements', label: 'Rekonpans', icon: <Trophy size={16} /> },
    { id: 'export', label: 'Ekspò', icon: <Download size={16} /> }
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as any)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            activeTab === tab.id 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
