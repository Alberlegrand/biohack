
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on ajouterait la logique d'authentification
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <Button 
          onClick={() => navigate('/')}
          variant="ghost" 
          className="text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2" size={16} />
          Retour à l'accueil
        </Button>

        <GlassCard>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Connexion
            </h1>
            <p className="text-gray-400">
              Connectez-vous à votre compte BioHack Pro
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Adresse email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="pl-10 bg-white/5 border-white/20 text-white"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="pl-10 pr-10 bg-white/5 border-white/20 text-white"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center space-y-4">
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              Mot de passe oublié ?
            </button>
            
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-400 text-sm mb-3">
                Pas encore de compte ?
              </p>
              <Button
                onClick={() => navigate('/onboarding')}
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                Créer un compte
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Login;
