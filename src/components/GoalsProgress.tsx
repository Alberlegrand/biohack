
import { GlassCard } from "./GlassCard";
import { Target, TrendingUp } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  progress: number;
  target: number;
  unit: string;
  category: string;
}

export const GoalsProgress = () => {
  const goals: Goal[] = [
    {
      id: '1',
      title: 'Méditation quotidienne',
      progress: 21,
      target: 30,
      unit: 'jours',
      category: 'Mental'
    },
    {
      id: '2',
      title: 'Perte de poids',
      progress: 3.2,
      target: 5,
      unit: 'kg',
      category: 'Physique'
    },
    {
      id: '3',
      title: 'Lecture de livres',
      progress: 8,
      target: 12,
      unit: 'livres',
      category: 'Développement'
    },
    {
      id: '4',
      title: 'Heures de sommeil',
      progress: 7.5,
      target: 8,
      unit: 'h/nuit',
      category: 'Récupération'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Mental': 'from-purple-500 to-pink-500',
      'Physique': 'from-green-500 to-emerald-500',
      'Développement': 'from-blue-500 to-cyan-500',
      'Récupération': 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gradient">Objectifs & Progression</h3>
        <Target className="text-purple-400" size={20} />
      </div>
      
      <div className="space-y-4">
        {goals.map((goal) => {
          const progressPercentage = Math.min((goal.progress / goal.target) * 100, 100);
          
          return (
            <div key={goal.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-white font-medium">{goal.title}</h4>
                  <span className="text-xs text-gray-400">{goal.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">
                    {goal.progress} / {goal.target} {goal.unit}
                  </div>
                  <div className="flex items-center text-xs text-green-400">
                    <TrendingUp size={12} className="mr-1" />
                    {progressPercentage.toFixed(0)}%
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(goal.category)} transition-all duration-300`}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};

export default GoalsProgress;
