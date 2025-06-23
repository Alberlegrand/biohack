
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Edit, Save, X, Star, Crown, Zap } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { userProfile, updateProfile, logout } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userProfile || {});

  if (!userProfile) {
    navigate('/');
    return null;
  }

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(userProfile);
    setIsEditing(false);
  };

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'free': return <Star className="text-gray-400" size={16} />;
      case 'basic': return <Zap className="text-blue-400" size={16} />;
      case 'premium': return <Crown className="text-purple-400" size={16} />;
      default: return <Star className="text-gray-400" size={16} />;
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'free': return 'bg-gray-600';
      case 'basic': return 'bg-blue-600';
      case 'premium': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <Button 
          onClick={() => navigate('/dashboard')}
          variant="ghost" 
          className="text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2" size={16} />
          Retour au tableau de bord
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">Mon Profil</h2>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Edit className="mr-2" size={16} />
                    Modifier
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Save className="mr-2" size={16} />
                      Sauvegarder
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <X className="mr-2" size={16} />
                      Annuler
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">Prénom</Label>
                  {isEditing ? (
                    <Input
                      value={editData.firstName || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">{userProfile.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Nom</Label>
                  {isEditing ? (
                    <Input
                      value={editData.lastName || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">{userProfile.lastName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Email</Label>
                  {isEditing ? (
                    <Input
                      value={editData.email || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">{userProfile.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Téléphone</Label>
                  {isEditing ? (
                    <Input
                      value={editData.phone || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">{userProfile.phone || 'Non renseigné'}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Date de naissance</Label>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={editData.dateOfBirth || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">
                      {userProfile.dateOfBirth ? new Date(userProfile.dateOfBirth).toLocaleDateString('fr-FR') : 'Non renseigné'}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Genre</Label>
                  <p className="text-white font-medium capitalize">{userProfile.gender || 'Non renseigné'}</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan actuel */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-4">Plan Actuel</h3>
              <div className="flex items-center space-x-3 mb-4">
                {getPlanIcon(userProfile.subscriptionPlan)}
                <div>
                  <Badge className={`${getPlanColor(userProfile.subscriptionPlan)} text-white`}>
                    {userProfile.subscriptionPlan === 'free' && 'Gratuit'}
                    {userProfile.subscriptionPlan === 'basic' && 'De Base'}
                    {userProfile.subscriptionPlan === 'premium' && 'Premium'}
                  </Badge>
                </div>
              </div>
              <Button
                onClick={() => navigate('/pricing')}
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                Changer de plan
              </Button>
            </GlassCard>

            {/* Statistiques */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-4">Statistiques</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Membre depuis</span>
                  <span className="text-white">
                    {userProfile.createdAt ? new Date(userProfile.createdAt).toLocaleDateString('fr-FR') : 'Aujourd\'hui'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Questions complétées</span>
                  <span className="text-white">10/10</span>
                </div>
              </div>
            </GlassCard>

            {/* Actions */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-4">Actions</h3>
              <div className="space-y-2">
                <Button
                  onClick={() => navigate('/onboarding')}
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  Refaire le questionnaire
                </Button>
                <Button
                  onClick={logout}
                  variant="destructive"
                  className="w-full"
                >
                  Se déconnecter
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
