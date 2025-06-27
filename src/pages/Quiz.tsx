
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

interface QuizQuestion {
  id: string;
  title: string;
  type: 'radio' | 'checkbox';
  options: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'lifestyle_current',
    title: 'Kijan ou ta dekri estil lavi ou kounye a?',
    type: 'radio',
    options: [
      'Aktif ak òganize',
      'Modere ak kèk defi',
      'Dezòdone ak strèsan',
      'Relaks men pa pwodiktif',
      'Ap chèche balans'
    ]
  },
  {
    id: 'main_goals',
    title: 'Ki objektif prensipal ou yo? (Chwazi tout sa ki aplike)',
    type: 'checkbox',
    options: [
      'Amelyore sante fizik mwen',
      'Devlope pwodiktivite mwen',
      'Jere strès ak anksyete',
      'Bati routin dòmi pi bon',
      'Ogmante konfyans nan tèt mwen',
      'Amelyore relasyon mwen yo',
      'Devlope nouvo konpetans',
      'Rive nan objektif pwofesyonèl'
    ]
  },
  {
    id: 'current_habits',
    title: 'Ki bon abitid ou deja gen? (Chwazi tout sa ki aplike)',
    type: 'checkbox',
    options: [
      'Mwen fè egzèsis regilyèman',
      'Mwen manje bon manje',
      'Mwen dòmi ase',
      'Mwen li ak etidye',
      'Mwen medite oswa priye',
      'Mwen òganize ak planifye',
      'Mwen swiv objektif mwen yo',
      'Pa gen anpil bon abitid'
    ]
  },
  {
    id: 'challenges',
    title: 'Ki defi ou pi souvent rankontre?',
    type: 'radio',
    options: [
      'Mwen pa gen ase tan',
      'Mwen manke motivasyon',
      'Mwen pa konnen kote pou kòmanse',
      'Mwen gen twòp distraksyon',
      'Mwen abandone twò fasil',
      'Mwen pa wè rezilta yo'
    ]
  },
  {
    id: 'daily_routine',
    title: 'Ki jan jounen ou yo ye kounye a?',
    type: 'radio',
    options: [
      'Trè òganize ak pwogram',
      'Gen kèk òganizasyon',
      'Mélange ak san òd',
      'Konplètman dezòdone',
      'Chanje chak jou'
    ]
  },
  {
    id: 'motivation_factors',
    title: 'Ki sa ki motive ou pi plis? (Chwazi tout sa ki aplike)',
    type: 'checkbox',
    options: [
      'Wè pwogre yo',
      'Sipò nan kominote',
      'Rekonpans ak sètifika',
      'Konpetisyon ak lòt moun',
      'Rezilta tanjibl yo',
      'Rekonèsans nan lòt moun',
      'Satisfaksyon pèsonèl'
    ]
  },
  {
    id: 'time_commitment',
    title: 'Konbyen tan ou ka konsèy chak jou pou devlopman pèsonèl?',
    type: 'radio',
    options: [
      '5-15 minit',
      '15-30 minit',
      '30-60 minit',
      '1-2 èdtan',
      'Plis pase 2 èdtan'
    ]
  },
  {
    id: 'tracking_preference',
    title: 'Ki jan ou ta renmen swiv pwogre ou?',
    type: 'radio',
    options: [
      'Ak grafik ak estatistik',
      'Ak lis ak kòche',
      'Ak foto ak imaj',
      'Ak jounal ak kòmèn',
      'Ak rapèl ak notifikasyon'
    ]
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const { setQuizAnswers } = useUser();
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
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizAnswers(answers);
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

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const hasAnswer = answers[currentQ.id] && 
    (currentQ.type === 'radio' ? answers[currentQ.id] : answers[currentQ.id].length > 0);

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
        <div className="max-w-md mx-auto text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <CheckCircle className="text-green-400 mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold text-white mb-4">
            Mèsi anpil!
          </h2>
          <p className="text-gray-300 mb-6">
            N ap prepare pwogram pèsonalize ou ak repons ou yo...
          </p>
          <div className="animate-pulse">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost" 
            className="text-gray-300 hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2" size={16} />
            Tounen lakay
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Ann konnen ou pi byen
            </h1>
            <p className="text-xl text-gray-300">
              Repons kèk kesyon pou nou ka kreye yon eksperyans ki fèt pou ou
            </p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Kesyon {currentQuestion + 1} sou {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            {currentQ.title}
          </h2>

          <div className="space-y-4">
            {currentQ.type === 'radio' && (
              <RadioGroup 
                value={answers[currentQ.id] || ''} 
                onValueChange={(value) => handleAnswer(currentQ.id, value)}
                className="space-y-4"
              >
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <RadioGroupItem value={option} id={`${currentQ.id}-${index}`} className="border-white/40 text-purple-400" />
                    <Label htmlFor={`${currentQ.id}-${index}`} className="text-gray-200 cursor-pointer text-lg flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQ.type === 'checkbox' && (
              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
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
                      className="border-white/40 data-[state=checked]:bg-purple-500"
                    />
                    <Label htmlFor={`${currentQ.id}-${index}`} className="text-gray-200 cursor-pointer text-lg flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
            className="border-white/30 text-white hover:bg-white/10 disabled:opacity-50"
          >
            <ArrowLeft className="mr-2" size={16} />
            Anvan
          </Button>
          
          <div className="text-center text-gray-400">
            {currentQuestion + 1} / {quizQuestions.length}
          </div>
          
          <Button 
            onClick={handleNext}
            disabled={!hasAnswer}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:from-gray-600 disabled:to-gray-600"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Fini' : 'Swivan'}
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
