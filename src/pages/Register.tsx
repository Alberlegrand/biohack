
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, User, Mail, Phone, Calendar } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { onboardingAnswers, setUserProfile } = useUser();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!onboardingAnswers) {
      navigate('/onboarding');
      return;
    }

    const userProfile = {
      id: Date.now().toString(),
      ...formData,
      onboardingAnswers,
      subscriptionPlan: 'free' as const,
      createdAt: new Date().toISOString()
    };

    setUserProfile(userProfile);
    navigate('/pricing');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <Button 
          onClick={() => navigate('/onboarding')}
          variant="ghost" 
          className="text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2" size={16} />
          Retour aux questions
        </Button>

        <GlassCard>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Créer votre compte
            </h1>
            <p className="text-gray-400">
              Complétez vos informations pour finaliser votre profil
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-300">
                  Prénom *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="Jean"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-300">
                  Nom *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="Dupont"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Adresse email *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="pl-10 bg-white/5 border-white/20 text-white"
                  placeholder="jean.dupont@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300">
                Téléphone
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="pl-10 bg-white/5 border-white/20 text-white"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-gray-300">
                Date de naissance
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  className="pl-10 bg-white/5 border-white/20 text-white"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-gray-300">Genre</Label>
              <RadioGroup 
                value={formData.gender} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="homme" id="homme" />
                  <Label htmlFor="homme" className="text-gray-300 cursor-pointer">Homme</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="femme" id="femme" />
                  <Label htmlFor="femme" className="text-gray-300 cursor-pointer">Femme</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="autre" id="autre" />
                  <Label htmlFor="autre" className="text-gray-300 cursor-pointer">Autre</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              disabled={!formData.firstName || !formData.lastName || !formData.email}
            >
              Créer mon compte
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              En créant votre compte, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Register;
