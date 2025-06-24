
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
      title: 'Meditasyon chak jou',
      progress: 21,
      target: 30,
      unit: 'jou',
      category: 'Mental'
    },
    {
      id: '2',
      title: 'Pèdi pwa',
      progress: 3.2,
      target: 5,
      unit: 'kg',
      category: 'Fizik'
    },
    {
      id: '3',
      title: 'Li liv',
      progress: 8,
      target: 12,
      unit: 'liv',
      category: 'Devlopman'
    },
    {
      id: '4',
      title: 'Èdtan dòmi',
      progress: 7.5,
      target: 8,
      unit: 'è/nwit',
      category: 'Rekiperasyon'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Mental': 'from-purple-500 to-pink-500',
      'Fizik': 'from-green-500 to-emerald-500',
      'Devlopman': 'from-blue-500 to-cyan-500',
      'Rekiperasyon': 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gradient">Objektif ak Pwogrè</h3>
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
