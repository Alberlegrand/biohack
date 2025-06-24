
import { useState, useEffect } from 'react';
import habitsData from '@/data/habits.json';

export interface HabitCategory {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface Habit {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  impact: number;
  frequency: 'daily' | 'weekly' | 'monthly';
  tips: string[];
}

export const useHabitsData = () => {
  const [categories, setCategories] = useState<HabitCategory[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCategories(habitsData.categories as HabitCategory[]);
      setHabits(habitsData.habits as Habit[]);
      setLoading(false);
    }, 100);
  }, []);

  const getHabitsByCategory = (categoryId: string) => {
    return habits.filter(habit => habit.category === categoryId);
  };

  const getHabitById = (id: string) => {
    return habits.find(habit => habit.id === id);
  };

  return {
    categories,
    habits,
    loading,
    getHabitsByCategory,
    getHabitById
  };
};
