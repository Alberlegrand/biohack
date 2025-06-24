
import { GlassCard } from "./GlassCard";
import { useHabitsData } from "@/hooks/useHabitsData";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Zap, Users, Star } from "lucide-react";
import { useState } from "react";

export const HabitsExplorer = () => {
  const { categories, habits, loading, getHabitsByCategory } = useHabitsData();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedHabit, setSelectedHabit] = useState<string>('');

  if (loading) {
    return (
      <GlassCard>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-white/20 rounded w-1/3"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 bg-white/10 rounded"></div>
            <div className="h-20 bg-white/10 rounded"></div>
          </div>
        </div>
      </GlassCard>
    );
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart size={20} />;
      case 'brain': return <Brain size={20} />;
      case 'zap': return <Zap size={20} />;
      case 'users': return <Users size={20} />;
      default: return <Star size={20} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-600';
      case 'medium': return 'bg-yellow-600'; 
      case 'hard': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const selectedHabits = selectedCategory ? getHabitsByCategory(selectedCategory) : habits;
  const habitDetails = selectedHabit ? habits.find(h => h.id === selectedHabit) : null;

  return (
    <div className="space-y-6">
      <GlassCard>
        <h3 className="text-xl font-semibold mb-4 text-gradient">Eksplore Abitid Yo</h3>
        
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory('')}
            className={`p-3 rounded-lg border transition-all ${
              selectedCategory === '' 
                ? 'bg-purple-500/30 border-purple-500' 
                : 'bg-white/5 border-white/20 hover:bg-white/10'
            }`}
          >
            <div className="text-center">
              <Star className="mx-auto mb-2 text-white" size={20} />
              <p className="text-white text-sm">Tout</p>
            </div>
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-3 rounded-lg border transition-all ${
                selectedCategory === category.id 
                  ? 'bg-purple-500/30 border-purple-500' 
                  : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="text-center">
                <div className="mx-auto mb-2 text-white">
                  {getIcon(category.icon)}
                </div>
                <p className="text-white text-sm">{category.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Habits List */}
        <div className="space-y-3">
          {selectedHabits.map((habit) => (
            <div 
              key={habit.id}
              onClick={() => setSelectedHabit(habit.id === selectedHabit ? '' : habit.id)}
              className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">{habit.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{habit.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={`${getDifficultyColor(habit.difficulty)} text-white`}>
                    {habit.difficulty === 'easy' && 'Fasil'}
                    {habit.difficulty === 'medium' && 'Modere'} 
                    {habit.difficulty === 'hard' && 'Difisil'}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-white text-sm ml-1">{habit.impact}/10</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Habit Details */}
      {habitDetails && (
        <GlassCard>
          <h4 className="text-xl font-semibold text-white mb-4">{habitDetails.name}</h4>
          <p className="text-gray-300 mb-4">{habitDetails.description}</p>
          
          <div className="mb-4">
            <h5 className="text-white font-medium mb-2">Konsèy pou kòmanse:</h5>
            <ul className="space-y-2">
              {habitDetails.tips.map((tip, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className={`${getDifficultyColor(habitDetails.difficulty)} text-white`}>
              Nivo: {habitDetails.difficulty === 'easy' && 'Fasil'}
              {habitDetails.difficulty === 'medium' && 'Modere'}
              {habitDetails.difficulty === 'hard' && 'Difisil'}
            </Badge>
            <div className="flex items-center">
              <Star className="text-yellow-400" size={16} />
              <span className="text-white text-sm ml-1">Enpak: {habitDetails.impact}/10</span>
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
};

export default HabitsExplorer;
