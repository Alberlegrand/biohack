
import { User } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { NotificationCenter } from "./NotificationCenter";
import { NavigationTabs } from "./NavigationTabs";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

interface AppHeaderProps {
  activeTab: 'dashboard' | 'analytics' | 'achievements' | 'export' | 'features';
  setActiveTab: (tab: 'dashboard' | 'analytics' | 'achievements' | 'export' | 'features') => void;
}

export const AppHeader = ({ activeTab, setActiveTab }: AppHeaderProps) => {
  const { userProfile } = useUser();
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">
            Routin Anm
          </h1>
          <p className="text-gray-400">
            Optimize pèfòmans ou ak byennèt ou ak 40 fonksyonalite
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

      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default AppHeader;
