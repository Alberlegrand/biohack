
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingAnswers {
  age: string;
  goals: string[];
  sleep: string;
  exercise: string;
  meditation: string;
  nutrition: string;
  stress: string;
  tracking: string[];
  challenges: string;
  commitment: string;
}

interface QuizAnswers {
  lifestyle_current: string;
  main_goals: string[];
  current_habits: string[];
  challenges: string;
  daily_routine: string;
  motivation_factors: string[];
  time_commitment: string;
  tracking_preference: string;
}

interface UserContextType {
  onboardingAnswers: OnboardingAnswers | null;
  quizAnswers: QuizAnswers | null;
  setOnboardingAnswers: (answers: OnboardingAnswers) => void;
  setQuizAnswers: (answers: QuizAnswers) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [onboardingAnswers, setOnboardingAnswers] = useState<OnboardingAnswers | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);

  return (
    <UserContext.Provider value={{
      onboardingAnswers,
      quizAnswers,
      setOnboardingAnswers,
      setQuizAnswers
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
