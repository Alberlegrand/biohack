
import { GlassCard } from "./GlassCard";
import { useContent } from "@/hooks/useContent";
import { Quote, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const DailyContent = () => {
  const { getDailyProverb, getAffirmationByTime, getRandomTip } = useContent();
  const [currentTime, setCurrentTime] = useState<'morning' | 'evening'>('morning');

  useEffect(() => {
    const hour = new Date().getHours();
    setCurrentTime(hour < 18 ? 'morning' : 'evening');
  }, []);

  const dailyProverb = getDailyProverb();
  const dailyAffirmation = getAffirmationByTime(currentTime);
  const dailyTip = getRandomTip();

  return (
    <div className="space-y-4">
      {/* Proverbe du jour */}
      <GlassCard>
        <div className="flex items-start space-x-3">
          <Quote className="text-purple-400 mt-1" size={20} />
          <div>
            <h4 className="text-white font-medium mb-2">Pwovèb Jou a</h4>
            <p className="text-gray-300 italic mb-2">"{dailyProverb?.text}"</p>
            <p className="text-gray-400 text-sm">{dailyProverb?.translation}</p>
          </div>
        </div>
      </GlassCard>

      {/* Affirmation */}
      <GlassCard>
        <div className="flex items-start space-x-3">
          {currentTime === 'morning' ? (
            <Sun className="text-yellow-400 mt-1" size={20} />
          ) : (
            <Moon className="text-blue-400 mt-1" size={20} />
          )}
          <div>
            <h4 className="text-white font-medium mb-2">
              {currentTime === 'morning' ? 'Afirmasyon Maten' : 'Afirmasyon Aswè'}
            </h4>
            <p className="text-gray-300">{dailyAffirmation?.text}</p>
          </div>
        </div>
      </GlassCard>

      {/* Conseil éducatif */}
      <GlassCard>
        <div>
          <h4 className="text-white font-medium mb-2">{dailyTip?.title}</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{dailyTip?.content}</p>
        </div>
      </GlassCard>
    </div>
  );
};

export default DailyContent;
