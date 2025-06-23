
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, Target, User, ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow">
              <Brain className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gradient mb-4">
            BioHack Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Optimisez votre performance, transformez vos habitudes et débloquez votre potentiel avec notre plateforme de biohacking et développement personnel.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <GlassCard className="text-center p-4">
              <Heart className="text-blue-400 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-300">Suivi Biométrique</p>
            </GlassCard>
            <GlassCard className="text-center p-4">
              <Zap className="text-purple-400 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-300">Tracker d'Habitudes</p>
            </GlassCard>
            <GlassCard className="text-center p-4">
              <Target className="text-cyan-400 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-300">Objectifs Personnalisés</p>
            </GlassCard>
            <GlassCard className="text-center p-4">
              <Brain className="text-green-400 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-300">IA Personnalisée</p>
            </GlassCard>
          </div>
        </div>

        {/* Action Buttons */}
        <GlassCard className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Commencer votre transformation
          </h2>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/onboarding')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 text-lg"
            >
              <ArrowRight className="mr-2" size={20} />
              Commencer maintenant
            </Button>
            
            <Button 
              onClick={() => navigate('/login')}
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10"
            >
              <User className="mr-2" size={20} />
              Se connecter
            </Button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            Gratuit pour commencer • Aucune carte requise
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Landing;
