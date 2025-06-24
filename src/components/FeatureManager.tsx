
import { GlassCard } from "./GlassCard";
import { useFeatures } from "@/hooks/useFeatures";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Beaker } from "lucide-react";

export const FeatureManager = () => {
  const { features, loading, getFeaturesByCategory } = useFeatures();

  if (loading) {
    return (
      <GlassCard>
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-1/2 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-white/10 rounded"></div>
            <div className="h-3 bg-white/10 rounded"></div>
            <div className="h-3 bg-white/10 rounded"></div>
          </div>
        </div>
      </GlassCard>
    );
  }

  const foundationFeatures = getFeaturesByCategory('foundation');
  const aiFeatures = getFeaturesByCategory('ai-personalization');
  const gamificationFeatures = getFeaturesByCategory('gamification');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="text-green-400" size={16} />;
      case 'planned': return <Clock className="text-yellow-400" size={16} />;
      case 'beta': return <Beaker className="text-blue-400" size={16} />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-600';
      case 'planned': return 'bg-yellow-600';
      case 'beta': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <GlassCard>
        <h3 className="text-xl font-semibold mb-4 text-gradient">Fonksyonalite Fondation</h3>
        <div className="space-y-3">
          {foundationFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
              <div className="flex items-center space-x-3">
                {getStatusIcon(feature.status)}
                <div>
                  <p className="text-white font-medium">{feature.name}</p>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
              <Badge className={`${getStatusColor(feature.status)} text-white`}>
                {feature.status === 'active' && 'Aktif'}
                {feature.status === 'planned' && 'Planifye'}
                {feature.status === 'beta' && 'Beta'}
              </Badge>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-xl font-semibold mb-4 text-gradient">IA ak Pèsonalizasyon</h3>
        <div className="space-y-3">
          {aiFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
              <div className="flex items-center space-x-3">
                {getStatusIcon(feature.status)}
                <div>
                  <p className="text-white font-medium">{feature.name}</p>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
              <Badge className={`${getStatusColor(feature.status)} text-white`}>
                {feature.status === 'active' && 'Aktif'}
                {feature.status === 'planned' && 'Planifye'}
                {feature.status === 'beta' && 'Beta'}
              </Badge>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Total: {features.length} fonksyonalite • 
          Aktif: {features.filter(f => f.status === 'active').length} • 
          Planifye: {features.filter(f => f.status === 'planned').length}
        </p>
      </div>
    </div>
  );
};

export default FeatureManager;
