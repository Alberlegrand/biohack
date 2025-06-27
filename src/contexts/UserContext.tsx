
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

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  onboardingAnswers?: OnboardingAnswers;
  subscriptionPlan: 'free' | 'basic' | 'premium';
  createdAt: string;
}

interface UserContextType {
  onboardingAnswers: OnboardingAnswers | null;
  quizAnswers: QuizAnswers | null;
  userProfile: UserProfile | null;
  setOnboardingAnswers: (answers: OnboardingAnswers) => void;
  setQuizAnswers: (answers: QuizAnswers) => void;
  setUserProfile: (profile: UserProfile) => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  updateSubscriptionPlan: (plan: 'free' | 'basic' | 'premium') => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [onboardingAnswers, setOnboardingAnswers] = useState<OnboardingAnswers | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (userProfile) {
      setUserProfile({ ...userProfile, ...updates });
    }
  };

  const updateSubscriptionPlan = (plan: 'free' | 'basic' | 'premium') => {
    if (userProfile) {
      setUserProfile({ ...userProfile, subscriptionPlan: plan });
    }
  };

  const logout = () => {
    setUserProfile(null);
    setOnboardingAnswers(null);
    setQuizAnswers(null);
  };

  return (
    <UserContext.Provider value={{
      onboardingAnswers,
      quizAnswers,
      userProfile,
      setOnboardingAnswers,
      setQuizAnswers,
      setUserProfile,
      updateProfile,
      updateSubscriptionPlan,
      logout
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
