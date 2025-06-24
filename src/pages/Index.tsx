import { Activity, Brain, Heart, Moon, Target, BookOpen, Zap, User, Bell, Trophy, Download } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { HabitTracker } from "@/components/HabitTracker";
import { SleepTracker } from "@/components/SleepTracker";
import { GratitudeJournal } from "@/components/GratitudeJournal";
import { BiometricDashboard } from "@/components/BiometricDashboard";
import { GoalsProgress } from "@/components/GoalsProgress";
import { NotificationCenter } from "@/components/NotificationCenter";
import { DataExport } from "@/components/DataExport";
import { AchievementSystem } from "@/components/AchievementSystem";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
import { GlassCard } from "@/components/GlassCard";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const { userProfile } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'analytics' | 'achievements' | 'export'>('dashboard');

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">
              Routin Anm
            </h1>
            <p className="text-gray-400">
              Optimize pèfòmans ou ak byennèt ou
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <NotificationCenter />
            <GlassCard className="p-4 cursor-pointer hover:bg-white/15 transition-all" onClick={() => navigate('/profile')}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : 'Itilizatè'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {userProfile?.subscriptionPlan === 'free' && 'Plan Gratis'}
                    {userProfile?.subscriptionPlan === 'basic' && 'Plan Debaz'}
                    {userProfile?.subscriptionPlan === 'premium' && 'Plan Premium'}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          {[
            { id: 'dashboard', label: 'Tablo De Bò', icon: <Activity size={16} /> },
            { id: 'analytics', label: 'Analytics', icon: <Brain size={16} /> },
            { id: 'achievements', label: 'Rekonpans', icon: <Trophy size={16} /> },
            { id: 'export', label: 'Ekspò', icon: <Download size={16} /> }
          ].map((tab) => (
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

        {/* Quick Stats */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Kote Byennèt"
              value={87}
              unit="%"
              trend={12}
              icon={<Heart size={24} />}
              color="blue"
            />
            <MetricCard
              title="Streak Abitid"
              value={21}
              unit="jou"
              trend={5}
              icon={<Zap size={24} />}
              color="purple"
            />
            <MetricCard
              title="Kalite Dòmi"
              value={8.2}
              unit="/10"
              trend={-2}
              icon={<Moon size={24} />}
              color="cyan"
            />
            <MetricCard
              title="Konsantrasyon Mental"
              value={92}
              unit="%"
              trend={8}
              icon={<Brain size={24} />}
              color="green"
            />
          </div>
        )}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HabitTracker />
              <SleepTracker />
            </div>
            <BiometricDashboard />
            <GoalsProgress />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <GratitudeJournal />
            
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Rekòmandasyon IA</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-start space-x-3">
                    <Brain className="text-blue-400 mt-1" size={16} />
                    <div>
                      <p className="text-sm text-blue-300 font-medium">Optimize Konitif</p>
                      <p className="text-xs text-gray-400 mt-1">Eseye 15min meditasyon anplis pou amelyore konsantrasyon ou.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-start space-x-3">
                    <Activity className="text-green-400 mt-1" size={16} />
                    <div>
                      <p className="text-sm text-green-300 font-medium">Rekiperasyon Aktif</p>
                      <p className="text-xs text-gray-400 mt-1">HRV ou wo, se bon moman pou yon antrènman entèns.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="text-purple-400 mt-1" size={16} />
                    <div>
                      <p className="text-sm text-purple-300 font-medium">Devlopman Pèsonèl</p>
                      <p className="text-xs text-gray-400 mt-1">Kontinye lekti ou, ou prèske rive nan objektif mwa ou!</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Aksyon Rapid</h3>
              <div className="space-y-2">
                <button className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-left hover:from-blue-500/30 hover:to-purple-500/30 transition-all">
                  <span className="text-white font-medium">Kòmanse sesyon meditasyon</span>
                </button>
                <button className="w-full p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-left hover:from-green-500/30 hover:to-emerald-500/30 transition-all">
                  <span className="text-white font-medium">Anrejistre antrènman</span>
                </button>
                <button className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-left hover:from-orange-500/30 hover:to-red-500/30 transition-all">
                  <span className="text-white font-medium">Pran mezi byometrik</span>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && <AdvancedAnalytics />}
      
      {activeTab === 'achievements' && <AchievementSystem />}
      
      {activeTab === 'export' && (
        <div className="max-w-2xl mx-auto">
          <DataExport />
        </div>
      )}

      {/* Footer Stats */}
      {activeTab === 'dashboard' && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gradient">156</div>
              <div className="text-xs text-gray-400">Jou aktif</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">23</div>
              <div className="text-xs text-gray-400">Abitid metrize</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">89%</div>
              <div className="text-xs text-gray-400">Kote global</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">12</div>
              <div className="text-xs text-gray-400">Objektif rive</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
