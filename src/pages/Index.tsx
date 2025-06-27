
import { useState } from "react";
import { Play, Star, Users, Trophy, Brain, Heart, Zap, CheckCircle, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Routin <span className="text-purple-400">Anm</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Fonksyonalite</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Konsèy</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pri</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontak</a>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Kòmanse Kounye a
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-gray-700">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white">Fonksyonalite</a>
              <a href="#about" className="block text-gray-300 hover:text-white">Konsèy</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Pri</a>
              <a href="#contact" className="block text-gray-300 hover:text-white">Kontak</a>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                Kòmanse Kounye a
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Chanje <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vi Ou</span><br />
            ak <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Routin Anm</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premye platfòm ki fèt pou kominote Ayisyen an ki vle devlope bon abitid ak amelyore kalite lavi yo
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
              <Play className="mr-2" size={20} />
              Kòmanse Jodi a - Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-white/10 text-lg px-8 py-4">
              Gade Videyo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Itilizatè Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40+</div>
              <div className="text-gray-400">Fonksyonalite</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Satisfaksyon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Sipò</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fonksyonalite Ki Ka <span className="text-purple-400">Chanje Lavi Ou</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nou gen tout bagay ou bezwen pou bati bon abitid ak rive nan objektif ou yo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
              <Brain className="text-purple-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">IA Pèsonalize</h3>
              <p className="text-gray-300 mb-6">
                Entèlijans atifisyèl ki adapte ak karaktè ou ak bay rekòmandasyon ki apwopriye pou ou
              </p>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-blue-500/30">
              <Heart className="text-blue-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Swiv Sante</h3>
              <p className="text-gray-300 mb-6">
                Swiv sante fizik ak mental ou chak jou ak resevwa konsèy pou amelyore byennèt ou
              </p>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30">
              <Trophy className="text-green-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Sistèm Rekonpans</h3>
              <p className="text-gray-300 mb-6">
                Jwenn badge, monte nan nivo ak patisipe nan defi ak kominote a
              </p>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sa Itilizatè Yo Di
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Routin Anm chanje lavi mwen! Depi mwen kòmanse itilize li, mwen pi òganize ak mwen gen plis enèji."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="text-white font-medium">Marie Joseph</div>
                  <div className="text-gray-400 text-sm">Depi 6 mwa</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Mwen renmen kijan yo fè aplikasyon an nan lang nou an. Li fè mwen santi mwen lakay mwen."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="text-white font-medium">Jean Baptiste</div>
                  <div className="text-gray-400 text-sm">Depi 1 ane</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Fonksyonalite IA a ede mwen konprann ki abitid ki pi bon pou mwen. Rezilta yo enkwayab!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-medium">Sabine Louis</div>
                  <div className="text-gray-400 text-sm">Depi 8 mwa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pare Pou Kòmanse?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Anrejistre kounye a ak kòmanse vwayaj ou nan direksyon yon lavi ki pi bon
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-12 py-4">
            Kòmanse Gratis Kounye a
          </Button>
          <p className="text-gray-400 mt-4">Pa gen obligasyon • Kansèl nenpòt lè</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                Routin <span className="text-purple-400">Anm</span>
              </div>
              <p className="text-gray-400">
                Platfòm ki fèt pou kominote Ayisyen an ki vle devlope ak grandi
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Prodwi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Fonksyonalite</a></li>
                <li><a href="#" className="hover:text-white">Pri</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Konpanyi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Konsèy Nou</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Karyè</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Sipò</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sant Èd</a></li>
                <li><a href="#" className="hover:text-white">Kontak</a></li>
                <li><a href="#" className="hover:text-white">Kominote</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">© 2024 Routin Anm. Tout dwa rezève.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Kondisyon Itilizasyon</a>
              <a href="#" className="text-gray-400 hover:text-white">Règleman Konfidansyalite</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
