
import { Activity, Brain, Heart, Moon, Target, BookOpen, Zap, User } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { HabitTracker } from "@/components/HabitTracker";
import { SleepTracker } from "@/components/SleepTracker";
import { GratitudeJournal } from "@/components/GratitudeJournal";
import { BiometricDashboard } from "@/components/BiometricDashboard";
import { GoalsProgress } from "@/components/GoalsProgress";
import { GlassCard } from "@/components/GlassCard";

const Index = () => {
  return (
    <div className="min-h-screen p-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">
              BioHack Pro
            </h1>
            <p className="text-gray-400">
              Optimisez votre performance et votre bien-être
            </p>
          </div>
          <GlassCard className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-medium">Alexandre Martin</p>
                <p className="text-xs text-gray-400">Niveau Avancé</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Score Bien-être"
            value={87}
            unit="%"
            trend={12}
            icon={<Heart size={24} />}
            color="blue"
          />
          <MetricCard
            title="Streak Habitudes"
            value={21}
            unit="jours"
            trend={5}
            icon={<Zap size={24} />}
            color="purple"
          />
          <MetricCard
            title="Qualité Sommeil"
            value={8.2}
            unit="/10"
            trend={-2}
            icon={<Moon size={24} />}
            color="cyan"
          />
          <MetricCard
            title="Focus Mental"
            value={92}
            unit="%"
            trend={8}
            icon={<Brain size={24} />}
            color="green"
          />
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HabitTracker />
            <SleepTracker />
          </div>
          <BiometricDashboard />
          <GoalsProgress />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <GratitudeJournal />
          
          <GlassCard>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Recommandations IA</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-start space-x-3">
                  <Brain className="text-blue-400 mt-1" size={16} />
                  <div>
                    <p className="text-sm text-blue-300 font-medium">Optimisation Cognitive</p>
                    <p className="text-xs text-gray-400 mt-1">Essayez 15min de méditation supplémentaire pour améliorer votre focus.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-start space-x-3">
                  <Activity className="text-green-400 mt-1" size={16} />
                  <div>
                    <p className="text-sm text-green-300 font-medium">Récupération Active</p>
                    <p className="text-xs text-gray-400 mt-1">Votre HRV est élevé, c'est le moment idéal pour un entraînement intense.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-purple-400 mt-1" size={16} />
                  <div>
                    <p className="text-sm text-purple-300 font-medium">Développement Personnel</p>
                    <p className="text-xs text-gray-400 mt-1">Continuez votre lecture, vous êtes proche de votre objectif mensuel !</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Actions Rapides</h3>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-left hover:from-blue-500/30 hover:to-purple-500/30 transition-all">
                <span className="text-white font-medium">Démarrer session méditation</span>
              </button>
              <button className="w-full p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-left hover:from-green-500/30 hover:to-emerald-500/30 transition-all">
                <span className="text-white font-medium">Logger entraînement</span>
              </button>
              <button className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-left hover:from-orange-500/30 hover:to-red-500/30 transition-all">
                <span className="text-white font-medium">Prendre mesures bio</span>
              </button>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="flex items-center justify-center space-x-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gradient">156</div>
            <div className="text-xs text-gray-400">Jours actifs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">23</div>
            <div className="text-xs text-gray-400">Habitudes maîtrisées</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">89%</div>
            <div className="text-xs text-gray-400">Score global</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">12</div>
            <div className="text-xs text-gray-400">Objectifs atteints</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
