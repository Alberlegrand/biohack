
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
  const [editData, setEditData] = useState(userProfile || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    onboardingAnswers: {} as any,
    subscriptionPlan: 'free' as const
  });

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
          Tounen nan tablo de bò
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">Pwofil Mwen</h2>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Edit className="mr-2" size={16} />
                    Modifye
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Save className="mr-2" size={16} />
                      Konsève
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <X className="mr-2" size={16} />
                      Anile
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">Premye non</Label>
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
                  <Label className="text-gray-300">Dezyèm non</Label>
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
                  <Label className="text-gray-300">Telefòn</Label>
                  {isEditing ? (
                    <Input
                      value={editData.phone || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">{userProfile.phone || 'Pa gen'}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Dat fèt</Label>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={editData.dateOfBirth || ''}
                      onChange={(e) => setEditData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-white font-medium">
                      {userProfile.dateOfBirth ? new Date(userProfile.dateOfBirth).toLocaleDateString('ht-HT') : 'Pa gen'}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Sèks</Label>
                  <p className="text-white font-medium capitalize">{userProfile.gender || 'Pa gen'}</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan actuel */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-4">Plan Aktyèl</h3>
              <div className="flex items-center space-x-3 mb-4">
                {getPlanIcon(userProfile.subscriptionPlan)}
                <div>
                  <Badge className={`${getPlanColor(userProfile.subscriptionPlan)} text-white`}>
                    {userProfile.subscriptionPlan === 'free' && 'Gratis'}
                    {userProfile.subscriptionPlan === 'basic' && 'Debaz'}
                    {userProfile.subscriptionPlan === 'premium' && 'Premium'}
                  </Badge>
                </div>
              </div>
              <Button
                onClick={() => navigate('/pricing')}
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                Chanje plan
              </Button>
            </GlassCard>

            {/* Statistiques */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-4">Estatistik</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Manm depi</span>
                  <span className="text-white">
                    {userProfile.createdAt ? new Date(userProfile.createdAt).toLocaleDateString('ht-HT') : 'Jodi a'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Kesyon konplè</span>
                  <span className="text-white">10/10</span>
                </div>
              </div>
            </GlassCard>

            {/* Actions */}
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-4">Aksyon</h3>
              <div className="space-y-2">
                <Button
                  onClick={() => navigate('/onboarding')}
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  Refè kèsyonè a
                </Button>
                <Button
                  onClick={logout}
                  variant="destructive"
                  className="w-full"
                >
                  Dekonekte
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
