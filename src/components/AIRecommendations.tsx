
import { Brain, Activity, BookOpen } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const AIRecommendations = () => {
  return (
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
  );
};

export default AIRecommendations;
