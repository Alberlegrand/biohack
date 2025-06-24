
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, ArrowRight, ArrowLeft } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const plans = [
  {
    id: 'free',
    name: 'Plan Gratis',
    price: '0€',
    period: 'pou tout tan',
    description: 'Pafè pou kòmanse vwayaj ou',
    icon: Star,
    color: 'from-gray-500 to-gray-600',
    features: [
      'Swiv 5 abitid maksimòm',
      'Tablo de bò bazikmaksimòm',
      'Estatistik chak semèn',
      'Jounal rekonesans',
      'Sipò kominote'
    ],
    limitations: [
      'Pa gen IA pèsonèl',
      'Istwa limite nan 30 jou',
      'Pa gen ekspò done'
    ]
  },
  {
    id: 'basic',
    name: 'Plan Debaz',
    price: '9,99€',
    period: 'chak mwa',
    description: 'Pou itilizatè yo ki angaje',
    icon: Zap,
    color: 'from-blue-500 to-purple-500',
    popular: true,
    features: [
      'Swiv abitid san limit',
      'IA pèsonèl ak rekòmandasyon',
      'Tracker dòmi avanse',
      'Metrik byometrik konplè',
      'Objektif pèsonèl',
      'Istwa konplè',
      'Ekspò done',
      'Sipò priyorite'
    ],
    limitations: []
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: '19,99€',
    period: 'chak mwa',
    description: 'Eksperyans ultimate pou biohacking',
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Tout fonksyon plan debaz la',
      'Coach IA avanse ak analiz predikatif',
      'Entegrasyon ak aparèy IoT',
      'Pwogram konplè pèsonèl',
      'Analiz jenetik (opsyonèl)',
      'Konsèltasyon ak ekspè',
      'API ak otomatizasyon avanse',
      'Sipò 24/7 dedye',
      'Aksè nan fonksyon beta yo'
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
      updateSubscriptionPlan(planId as 'free' | 'basic' | 'premium');
      navigate('/dashboard');
    } else {
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
            Tounen
          </Button>
          
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Chwazi plan ou
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Chwazi plan ki pi bon pou objektif devlopman pèsonèl ak biohacking ou yo
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
                    Popilè
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
                  {plan.id === 'free' ? 'Kòmanse gratis' : 'Chwazi plan sa a'}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </GlassCard>
            );
          })}
        </div>

        {/* Additional Info */}
        <GlassCard className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            Garanti satisfè oswa lajan ou tounen nan 30 jou
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Eseye platfòm nou an san risk. Si ou pa konplètman satisfè, 
            n ap remèt ou lajan ou nan 30 premye jou yo.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>✓ Anile nenpòt lè</span>
            <span>✓ Done yo ka ekspòte</span>
            <span>✓ Sipò nan kreyòl</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Pricing;
