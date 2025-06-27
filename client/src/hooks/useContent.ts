
import { useState, useEffect } from 'react';
import contentData from '@/data/content.json';

export interface Proverb {
  id: number;
  text: string;
  translation: string;
  category: string;
}

export interface Affirmation {
  id: number;
  text: string;
  category: string;
  time: 'morning' | 'evening';
}

export interface EducationalTip {
  id: number;
  title: string;
  content: string;
  category: string;
}

export const useContent = () => {
  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [affirmations, setAffirmations] = useState<Affirmation[]>([]);
  const [educationalTips, setEducationalTips] = useState<EducationalTip[]>([]);

  useEffect(() => {
    setProverbs(contentData.proverbs as Proverb[]);
    setAffirmations(contentData.affirmations as Affirmation[]);
    setEducationalTips(contentData.educational_tips as EducationalTip[]);
  }, []);

  const getDailyProverb = () => {
    const today = new Date().getDate();
    return proverbs[today % proverbs.length];
  };

  const getAffirmationByTime = (time: 'morning' | 'evening') => {
    const filtered = affirmations.filter(aff => aff.time === time);
    const today = new Date().getDate();
    return filtered[today % filtered.length];
  };

  const getRandomTip = () => {
    return educationalTips[Math.floor(Math.random() * educationalTips.length)];
  };

  return {
    proverbs,
    affirmations,
    educationalTips,
    getDailyProverb,
    getAffirmationByTime,
    getRandomTip
  };
};
