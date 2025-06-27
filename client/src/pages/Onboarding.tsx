
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
    title: 'Ki laj ou ye?',
    type: 'radio',
    options: ['18-25 an', '26-35 an', '36-45 an', '46-55 an', '55+ an']
  },
  {
    id: 'goals',
    title: 'Ki objektif prensipal ou yo? (Ou ka chwazi plizyè)',
    type: 'checkbox',
    options: [
      'Amelyore fòm fizik mwen',
      'Optimize dòmi mwen',
      'Ogmante pwodiktivite mwen',
      'Jere strès',
      'Devlope pi bon abitid',
      'Pèdi pwa',
      'Amelyore konsantrasyon mwen'
    ]
  },
  {
    id: 'sleep',
    title: 'Konbyen èdtan ou dòmi chak nwit?',
    type: 'radio',
    options: ['Mwens pase 6è', '6-7è', '7-8è', '8-9è', 'Plis pase 9è']
  },
  {
    id: 'exercise',
    title: 'Konbyen fwa ou fè egzèsis?',
    type: 'radio',
    options: ['Jamè', '1-2 fwa/semèn', '3-4 fwa/semèn', '5-6 fwa/semèn', 'Chak jou']
  },
  {
    id: 'meditation',
    title: 'Èske ou pratike meditasyon oswa konsyans?',
    type: 'radio',
    options: ['Jamè', 'Pafwa', 'Kèk fwa/semèn', 'Chak jou']
  },
  {
    id: 'nutrition',
    title: 'Ki jan ou ta dekri manje ou?',
    type: 'radio',
    options: ['Trè mal ekilibre', 'Mal ekilibre', 'Kòrèk', 'Ekilibre', 'Trè ekilibre']
  },
  {
    id: 'stress',
    title: 'Ki nivo strès ou chak jou?',
    type: 'radio',
    options: ['Trè fèb', 'Fèb', 'Modere', 'Wo', 'Trè wo']
  },
  {
    id: 'tracking',
    title: 'Èske ou deja itilize zouti pou swiv? (Ou ka chwazi plizyè)',
    type: 'checkbox',
    options: [
      'Montre konekte',
      'Aplikasyon mobil',
      'Jounal papye',
      'Capteur byometrik',
      'Pa gen zouti'
    ]
  },
  {
    id: 'challenges',
    title: 'Ki defi prensipal ou yo kounye a?',
    type: 'textarea',
    placeholder: 'Dekri pwoblèm prensipal ou yo nan devlopman pèsonèl...'
  },
  {
    id: 'commitment',
    title: 'Konbyen tan ou ka bay chak jou pou devlopman ou?',
    type: 'radio',
    options: ['5-10 minit', '10-20 minit', '20-30 minit', '30-60 minit', 'Plis pase 1 èdtan']
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
            Pwofil ou kreye ak siksè!
          </h2>
          <p className="text-gray-300 mb-6">
            N ap prepare plan pèsonèl ou...
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
            Tounen
          </Button>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Kesyon {currentQuestion + 1} sou {questions.length}</span>
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
            Anvan
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!answers[currentQ.id] || (currentQ.type === 'checkbox' && (!answers[currentQ.id] || answers[currentQ.id].length === 0))}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            {currentQuestion === questions.length - 1 ? 'Fini' : 'Swivan'}
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
