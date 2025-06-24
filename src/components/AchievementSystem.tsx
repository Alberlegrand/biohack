
import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Trophy, Award, Star, Zap, Target, Heart, Book, Moon } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  progress: number;
  target: number;
  category: 'habit' | 'goal' | 'health' | 'streak';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export const AchievementSystem = () => {
  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Premye Pa',
      description: 'Kreye premye abitid ou',
      icon: <Star className="text-yellow-400" size={24} />,
      unlocked: true,
      progress: 1,
      target: 1,
      category: 'habit',
      rarity: 'common'
    },
    {
      id: '2',
      title: 'Semèn Konsistan',
      description: 'Kenbe 7 jou nan yon abitid',
      icon: <Zap className="text-blue-400" size={24} />,
      unlocked: true,
      progress: 7,
      target: 7,
      category: 'streak',
      rarity: 'common'
    },
    {
      id: '3',
      title: 'Meditasyon Mèt',
      description: 'Fè meditasyon 30 jou nan yon mwa',
      icon: <Heart className="text-purple-400" size={24} />,
      unlocked: false,
      progress: 21,
      target: 30,
      category: 'habit',
      rarity: 'rare'
    },
    {
      id: '4',
      title: 'Bibliyotèk',
      description: 'Li 12 liv nan yon ane',
      icon: <Book className="text-green-400" size={24} />,
      unlocked: false,
      progress: 8,
      target: 12,
      category: 'goal',
      rarity: 'epic'
    },
    {
      id: '5',
      title: 'Dòmi Ekspè',
      description: 'Kenbe bon kalite dòmi pou 100 nwit',
      icon: <Moon className="text-cyan-400" size={24} />,
      unlocked: false,
      progress: 45,
      target: 100,
      category: 'health',
      rarity: 'legendary'
    }
  ]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-500';
      case 'rare': return 'border-blue-500';
      case 'epic': return 'border-purple-500';
      case 'legendary': return 'border-yellow-500';
      default: return 'border-gray-500';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'rare': return 'shadow-blue-500/20';
      case 'epic': return 'shadow-purple-500/20';
      case 'legendary': return 'shadow-yellow-500/20';
      default: return '';
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalAchievements = achievements.length;

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gradient">Rekonpans ak Badge</h3>
        <div className="flex items-center space-x-2">
          <Trophy className="text-yellow-400" size={20} />
          <span className="text-white font-semibold">{unlockedCount}/{totalAchievements}</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient">{unlockedCount}</div>
          <div className="text-xs text-gray-400">Badge Genyen</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient">
            {Math.round((unlockedCount / totalAchievements) * 100)}%
          </div>
          <div className="text-xs text-gray-400">Konplè</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient">
            {achievements.filter(a => a.rarity === 'legendary' && a.unlocked).length}
          </div>
          <div className="text-xs text-gray-400">Lejandè</div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative p-4 rounded-lg border-2 transition-all ${
              achievement.unlocked 
                ? `bg-white/10 ${getRarityColor(achievement.rarity)} ${getRarityGlow(achievement.rarity)} shadow-lg` 
                : 'bg-white/5 border-white/10 opacity-60'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                achievement.unlocked ? 'bg-white/20' : 'bg-white/5'
              }`}>
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold ${
                    achievement.unlocked ? 'text-white' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    achievement.rarity === 'common' ? 'bg-gray-600 text-gray-300' :
                    achievement.rarity === 'rare' ? 'bg-blue-600 text-blue-300' :
                    achievement.rarity === 'epic' ? 'bg-purple-600 text-purple-300' :
                    'bg-yellow-600 text-yellow-300'
                  }`}>
                    {achievement.rarity}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-2">
                  {achievement.description}
                </p>
                
                {!achievement.unlocked && (
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                      style={{ width: `${(achievement.progress / achievement.target) * 100}%` }}
                    ></div>
                  </div>
                )}
                
                <div className="text-xs text-gray-500 mt-1">
                  {achievement.progress}/{achievement.target}
                </div>
              </div>
            </div>

            {achievement.unlocked && (
              <div className="absolute top-2 right-2">
                <Award className="text-yellow-400" size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default AchievementSystem;
