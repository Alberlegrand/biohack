
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

interface UserProfile {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  onboardingAnswers: OnboardingAnswers;
  subscriptionPlan: 'free' | 'basic' | 'premium';
  createdAt?: string;
}

interface UserContextType {
  userProfile: UserProfile | null;
  onboardingAnswers: OnboardingAnswers | null;
  setOnboardingAnswers: (answers: OnboardingAnswers) => void;
  setUserProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  isLoggedIn: boolean;
  login: (profile: UserProfile) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [onboardingAnswers, setOnboardingAnswersState] = useState<OnboardingAnswers | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setOnboardingAnswers = (answers: OnboardingAnswers) => {
    setOnboardingAnswersState(answers);
    // Sauvegarder dans localStorage temporairement
    localStorage.setItem('onboardingAnswers', JSON.stringify(answers));
  };

  const setUserProfile = (profile: UserProfile) => {
    setUserProfileState(profile);
    setIsLoggedIn(true);
    // Sauvegarder dans localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (userProfile) {
      const updatedProfile = { ...userProfile, ...updates };
      setUserProfileState(updatedProfile);
      localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    }
  };

  const login = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const logout = () => {
    setUserProfileState(null);
    setIsLoggedIn(false);
    localStorage.removeItem('userProfile');
    localStorage.removeItem('onboardingAnswers');
  };

  // Charger les données au démarrage
  React.useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    const savedAnswers = localStorage.getItem('onboardingAnswers');
    
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setUserProfileState(profile);
      setIsLoggedIn(true);
    }
    
    if (savedAnswers) {
      setOnboardingAnswersState(JSON.parse(savedAnswers));
    }
  }, []);

  return (
    <UserContext.Provider value={{
      userProfile,
      onboardingAnswers,
      setOnboardingAnswers,
      setUserProfile,
      updateProfile,
      isLoggedIn,
      login,
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
