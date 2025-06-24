
import { useState, useEffect } from 'react';
import achievementsData from '@/data/achievements.json';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic';
  requirements: {
    type: string;
    count: number;
  };
}

export interface Level {
  level: number;
  xp_required: number;
  title: string;
}

export const useAchievements = () => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [levels, setLevels] = useState<Level[]>([]);
  const [userXP, setUserXP] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);

  useEffect(() => {
    setBadges(achievementsData.badges as Badge[]);
    setLevels(achievementsData.levels as Level[]);
    
    // Load user progress from localStorage
    const savedXP = localStorage.getItem('userXP');
    const savedBadges = localStorage.getItem('unlockedBadges');
    
    if (savedXP) setUserXP(parseInt(savedXP));
    if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges));
  }, []);

  const addXP = (amount: number) => {
    const newXP = userXP + amount;
    setUserXP(newXP);
    localStorage.setItem('userXP', newXP.toString());
  };

  const unlockBadge = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      const newBadges = [...unlockedBadges, badgeId];
      setUnlockedBadges(newBadges);
      localStorage.setItem('unlockedBadges', JSON.stringify(newBadges));
    }
  };

  const getCurrentLevel = () => {
    return levels.find(level => 
      userXP >= level.xp_required && 
      (levels[level.level] ? userXP < levels[level.level].xp_required : true)
    ) || levels[0];
  };

  return {
    badges,
    levels,
    userXP,
    unlockedBadges,
    addXP,
    unlockBadge,
    getCurrentLevel
  };
};
