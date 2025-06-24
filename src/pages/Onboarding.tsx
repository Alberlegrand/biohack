import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

interface Question {
  id: string;
  title: string;
  type: 'radio' | 'checkbox' | 'input' | 'textarea';
  options?: string[];
  placeholder?: string;
}

const questions: Question[] = [
  {
    id: 'age',
    title: 'Quelle est votre tranche d\'âge ?',
    type: 'radio',
    options: ['18-25 ans', '26-35 ans', '36-45 ans', '46-55 ans', '55+ ans']
  },
  {
    id: 'goals',
    title: 'Quels sont vos principaux objectifs ? (Plusieurs choix possibles)',
    type: 'checkbox',
    options: [
      'Améliorer ma forme physique',
      'Optimiser mon sommeil',
      'Augmenter ma productivité',
      'Gérer le stress',
      'Développer de meilleures habitudes',
      'Perdre du poids',
      'Améliorer ma concentration'
    ]
  },
  {
    id: 'sleep',
    title: 'Combien d\'heures dormez-vous en moyenne par nuit ?',
    type: 'radio',
    options: ['Moins de 6h', '6-7h', '7-8h', '8-9h', 'Plus de 9h']
  },
  {
    id: 'exercise',
    title: 'À quelle fréquence faites-vous de l\'exercice ?',
    type: 'radio',
    options: ['Jamais', '1-2 fois/semaine', '3-4 fois/semaine', '5-6 fois/semaine', 'Tous les jours']
  },
  {
    id: 'meditation',
    title: 'Pratiquez-vous la méditation ou la pleine conscience ?',
    type: 'radio',
    options: ['Jamais', 'Occasionnellement', 'Quelques fois/semaine', 'Quotidiennement']
  },
  {
    id: 'nutrition',
    title: 'Comment décririez-vous votre alimentation ?',
    type: 'radio',
    options: ['Très déséquilibrée', 'Plutôt déséquilibrée', 'Correcte', 'Équilibrée', 'Très équilibrée']
  },
  {
    id: 'stress',
    title: 'Quel est votre niveau de stress quotidien ?',
    type: 'radio',
    options: ['Très faible', 'Faible', 'Modéré', 'Élevé', 'Très élevé']
  },
  {
    id: 'tracking',
    title: 'Utilisez-vous déjà des outils de suivi ? (Plusieurs choix possibles)',
    type: 'checkbox',
    options: [
      'Montre connectée',
      'Applications mobiles',
      'Journal papier',
      'Capteurs biométriques',
      'Aucun outil'
    ]
  },
  {
    id: 'challenges',
    title: 'Quels sont vos principaux défis actuels ?',
    type: 'textarea',
    placeholder: 'Décrivez vos difficultés principales en développement personnel...'
  },
  {
    id: 'commitment',
    title: 'Combien de temps pouvez-vous consacrer quotidiennement à votre développement ?',
    type: 'radio',
    options: ['5-10 minutes', '10-20 minutes', '20-30 minutes', '30-60 minutes', 'Plus d\'1 heure']
  }
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { setOnboardingAnswers } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Sauvegarder les réponses dans le contexte
      setOnboardingAnswers(answers as any);
      setIsCompleted(true);
      
      setTimeout(() => {
        navigate('/register');
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <GlassCard className="max-w-md mx-auto text-center">
          <CheckCircle className="text-green-400 mx-auto mb-4" size={64} />
          <h2 className="text-2xl font-semibold text-white mb-4">
            Profil créé avec succès !
          </h2>
          <p className="text-gray-300 mb-6">
            Nous préparons votre plan personnalisé...
          </p>
          <div className="animate-pulse">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost" 
            className="text-gray-400 hover:text-white mb-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Retour
          </Button>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <GlassCard className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            {currentQ.title}
          </h2>

          <div className="space-y-4">
            {currentQ.type === 'radio' && (
              <RadioGroup 
                value={answers[currentQ.id] || ''} 
                onValueChange={(value) => handleAnswer(currentQ.id, value)}
              >
                {currentQ.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${currentQ.id}-${index}`} />
                    <Label htmlFor={`${currentQ.id}-${index}`} className="text-gray-300 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQ.type === 'checkbox' && (
              <div className="space-y-3">
                {currentQ.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`${currentQ.id}-${index}`}
                      checked={answers[currentQ.id]?.includes(option) || false}
                      onCheckedChange={(checked) => {
                        const currentAnswers = answers[currentQ.id] || [];
                        if (checked) {
                          handleAnswer(currentQ.id, [...currentAnswers, option]);
                        } else {
                          handleAnswer(currentQ.id, currentAnswers.filter((a: string) => a !== option));
                        }
                      }}
                    />
                    <Label htmlFor={`${currentQ.id}-${index}`} className="text-gray-300 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            {currentQ.type === 'input' && (
              <Input
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                placeholder={currentQ.placeholder}
                className="bg-white/5 border-white/20 text-white"
              />
            )}

            {currentQ.type === 'textarea' && (
              <Textarea
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                placeholder={currentQ.placeholder}
                className="bg-white/5 border-white/20 text-white min-h-[120px]"
              />
            )}
          </div>
        </GlassCard>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
            className="border-white/30 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2" size={16} />
            Précédent
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!answers[currentQ.id] || (currentQ.type === 'checkbox' && (!answers[currentQ.id] || answers[currentQ.id].length === 0))}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
