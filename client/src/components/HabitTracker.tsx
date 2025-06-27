
import { GlassCard } from "./GlassCard";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

interface Habit {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
}

export const HabitTracker = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: '1', name: 'Meditasyon nan maten', completed: true, streak: 7 },
    { id: '2', name: '8 vè dlo', completed: false, streak: 3 },
    { id: '3', name: 'Egzèsis fizik', completed: true, streak: 5 },
    { id: '4', name: 'Lekti (30min)', completed: false, streak: 2 },
    { id: '5', name: 'Douch frèt', completed: true, streak: 12 },
  ]);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4 text-gradient">Abitid Chak Jou</h3>
      <div className="space-y-3">
        {habits.map((habit) => (
          <div 
            key={habit.id}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => toggleHabit(habit.id)}
          >
            <div className="flex items-center space-x-3">
              {habit.completed ? (
                <CheckCircle2 className="text-green-400" size={20} />
              ) : (
                <Circle className="text-gray-400 hover:text-green-400 transition-colors" size={20} />
              )}
              <span className={`${habit.completed ? 'text-white line-through' : 'text-gray-300'}`}>
                {habit.name}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                {habit.streak} jou
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default HabitTracker;
