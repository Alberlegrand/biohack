
import { GlassCard } from "./GlassCard";
import { Moon, Sunrise, Heart, Zap } from "lucide-react";

export const SleepTracker = () => {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4 text-gradient">Suivi du Sommeil</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Moon className="text-blue-400 mr-2" size={20} />
            <span className="text-sm text-gray-400">Coucher</span>
          </div>
          <div className="text-xl font-bold text-white">22:30</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Sunrise className="text-orange-400 mr-2" size={20} />
            <span className="text-sm text-gray-400">Lever</span>
          </div>
          <div className="text-xl font-bold text-white">06:30</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-300">Sommeil total</span>
          </div>
          <span className="text-white font-semibold">8h 00min</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="text-red-400" size={16} />
            <span className="text-sm text-gray-300">FC repos</span>
          </div>
          <span className="text-white font-semibold">52 bpm</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="text-green-400" size={16} />
            <span className="text-sm text-gray-300">Score récupération</span>
          </div>
          <span className="text-green-400 font-semibold">85%</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Qualité</span>
          <span>Excellente</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default SleepTracker;
