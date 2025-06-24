
import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { QuickStats } from "@/components/QuickStats";
import { DashboardContent } from "@/components/DashboardContent";
import { FooterStats } from "@/components/FooterStats";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
import { AchievementSystem } from "@/components/AchievementSystem";
import { DataExport } from "@/components/DataExport";
import { FeatureManager } from "@/components/FeatureManager";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'analytics' | 'achievements' | 'export' | 'features'>('dashboard');

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      <AppHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Quick Stats */}
      {activeTab === 'dashboard' && <QuickStats />}

      {/* Content based on active tab */}
      {activeTab === 'dashboard' && <DashboardContent />}
      {activeTab === 'analytics' && <AdvancedAnalytics />}
      {activeTab === 'achievements' && <AchievementSystem />}
      {activeTab === 'features' && (
        <div className="max-w-4xl mx-auto">
          <FeatureManager />
        </div>
      )}
      {activeTab === 'export' && (
        <div className="max-w-2xl mx-auto">
          <DataExport />
        </div>
      )}

      {/* Footer Stats */}
      {activeTab === 'dashboard' && <FooterStats />}
    </div>
  );
};

export default Index;
