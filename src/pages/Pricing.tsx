import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, ArrowRight, ArrowLeft } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const plans = [
  {
    id: 'free',
    name: 'Plan Gratuit',
    price: '0€',
    period: 'pour toujours',
    description: 'Parfait pour commencer votre parcours',
    icon: Star,
    color: 'from-gray-500 to-gray-600',
    features: [
      'Suivi de 5 habitudes maximum',
      'Tableau de bord basique',
      'Statistiques hebdomadaires',
      'Journal de gratitude',
      'Support communautaire'
    ],
    limitations: [
      'Pas d\'IA personnalisée',
      'Historique limité à 30 jours',
      'Pas d\'export de données'
    ]
  },
  {
    id: 'basic',
    name: 'Plan de Base',
    price: '9,99€',
    period: 'par mois',
    description: 'Pour les utilisateurs engagés',
    icon: Zap,
    color: 'from-blue-500 to-purple-500',
    popular: true,
    features: [
      'Suivi d\'habitudes illimité',
      'IA personnalisée et recommandations',
      'Tracker de sommeil avancé',
      'Métriques biométriques complètes',
      'Objectifs personnalisés',
      'Historique complet',
      'Export de données',
      'Support prioritaire'
    ],
    limitations: []
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: '19,99€',
    period: 'par mois',
    description: 'L\'expérience ultime de biohacking',
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Toutes les fonctionnalités du plan de base',
      'Coach IA avancé avec analyses prédictives',
      'Intégrations avec appareils IoT',
      'Programmes personnalisés complets',
      'Analyses génétiques (optionnel)',
      'Consultations avec experts',
      'API et automations avancées',
      'Support 24/7 dédié',
      'Accès aux fonctionnalités beta'
    ],
    limitations: []
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  const { userProfile, updateSubscriptionPlan } = useUser();
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    
    if (userProfile) {
      // Mettre à jour le plan dans le profil utilisateur
      updateSubscriptionPlan(planId as 'free' | 'basic' | 'premium');
      navigate('/dashboard');
    } else {
      // Si pas de profil, rediriger vers l'enregistrement
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            onClick={() => navigate(userProfile ? '/profile' : '/register')}
            variant="ghost" 
            className="text-gray-400 hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2" size={16} />
            Retour
          </Button>
          
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Choisissez votre plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sélectionnez le plan qui correspond le mieux à vos objectifs de développement personnel et biohacking
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <GlassCard 
                key={plan.id} 
                className={`relative overflow-hidden transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-blue-500 scale-105' : ''
                } ${plan.popular ? 'border-2 border-blue-500/50' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Populaire
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="text-green-400 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start space-x-3 opacity-60">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">×</span>
                      <span className="text-gray-400 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full ${
                    plan.id === 'free' 
                      ? 'bg-gray-600 hover:bg-gray-700' 
                      : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                  }`}
                >
                  {plan.id === 'free' ? 'Commencer gratuitement' : 'Choisir ce plan'}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </GlassCard>
            );
          })}
        </div>

        {/* Additional Info */}
        <GlassCard className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            Garantie satisfait ou remboursé 30 jours
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Essayez notre plateforme sans risque. Si vous n'êtes pas entièrement satisfait, 
            nous vous remboursons intégralement dans les 30 premiers jours.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>✓ Annulation à tout moment</span>
            <span>✓ Données exportables</span>
            <span>✓ Support français</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Pricing;
