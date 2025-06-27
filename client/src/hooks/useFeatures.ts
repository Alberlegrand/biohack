
import { useState, useEffect } from 'react';
import featuresData from '@/data/features.json';

export interface Feature {
  id: number;
  name: string;
  category: string;
  status: 'active' | 'planned' | 'beta';
  priority: 'high' | 'medium' | 'low';
  description: string;
  component: string;
}

export const useFeatures = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from JSON
    setTimeout(() => {
      setFeatures(featuresData.features as Feature[]);
      setLoading(false);
    }, 100);
  }, []);

  const getFeaturesByCategory = (category: string) => {
    return features.filter(feature => feature.category === category);
  };

  const getActiveFeatures = () => {
    return features.filter(feature => feature.status === 'active');
  };

  const getFeatureById = (id: number) => {
    return features.find(feature => feature.id === id);
  };

  return {
    features,
    loading,
    getFeaturesByCategory,
    getActiveFeatures,
    getFeatureById
  };
};
