
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
  updateSubscriptionPlan: (plan: 'free' | 'basic' | 'premium') => void;
  isLoggedIn: boolean;
  login: (profile: UserProfile) => void;
  logout: () => void;
  saveUserData: () => void;
  loadUserData: () => void;
  getAllUsers: () => UserProfile[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [onboardingAnswers, setOnboardingAnswersState] = useState<OnboardingAnswers | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Stockage des données en JSON dans localStorage
  const saveUserData = () => {
    if (userProfile) {
      // Sauvegarder le profil actuel
      localStorage.setItem('currentUser', JSON.stringify(userProfile));
      
      // Sauvegarder dans la liste des utilisateurs
      const existingUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
      const userIndex = existingUsers.findIndex((user: UserProfile) => user.id === userProfile.id);
      
      if (userIndex >= 0) {
        existingUsers[userIndex] = userProfile;
      } else {
        existingUsers.push(userProfile);
      }
      
      localStorage.setItem('allUsers', JSON.stringify(existingUsers));
      
      // Créer un fichier de sauvegarde JSON (simulation)
      const backupData = {
        users: existingUsers,
        lastUpdate: new Date().toISOString()
      };
      console.log('Données sauvegardées:', JSON.stringify(backupData, null, 2));
    }
  };

  const loadUserData = () => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserProfileState(user);
      setIsLoggedIn(true);
    }
  };

  const getAllUsers = (): UserProfile[] => {
    return JSON.parse(localStorage.getItem('allUsers') || '[]');
  };

  const setOnboardingAnswers = (answers: OnboardingAnswers) => {
    setOnboardingAnswersState(answers);
    localStorage.setItem('tempOnboardingAnswers', JSON.stringify(answers));
  };

  const setUserProfile = (profile: UserProfile) => {
    setUserProfileState(profile);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(profile));
    
    // Auto-save à chaque mise à jour du profil
    setTimeout(saveUserData, 100);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (userProfile) {
      const updatedProfile = { ...userProfile, ...updates };
      setUserProfileState(updatedProfile);
      localStorage.setItem('currentUser', JSON.stringify(updatedProfile));
      saveUserData();
    }
  };

  const updateSubscriptionPlan = (plan: 'free' | 'basic' | 'premium') => {
    if (userProfile) {
      updateProfile({ subscriptionPlan: plan });
    }
  };

  const login = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const logout = () => {
    setUserProfileState(null);
    setOnboardingAnswersState(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('tempOnboardingAnswers');
  };

  // Charger les données au démarrage
  React.useEffect(() => {
    loadUserData();
    
    const savedAnswers = localStorage.getItem('tempOnboardingAnswers');
    if (savedAnswers) {
      setOnboardingAnswersState(JSON.parse(savedAnswers));
    }
  }, []);

  // Auto-save périodique
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (userProfile) {
        saveUserData();
      }
    }, 60000); // Sauvegarde toutes les minutes

    return () => clearInterval(interval);
  }, [userProfile]);

  return (
    <UserContext.Provider value={{
      userProfile,
      onboardingAnswers,
      setOnboardingAnswers,
      setUserProfile,
      updateProfile,
      updateSubscriptionPlan,
      isLoggedIn,
      login,
      logout,
      saveUserData,
      loadUserData,
      getAllUsers
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
