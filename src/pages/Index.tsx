import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ChevronDown, Star, Users, Trophy, Brain, Heart, Zap, CheckCircle, ArrowRight, Menu, X, Target, Award, Calendar, BarChart3, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-900">
                Routin <span className="text-purple-600">Anm</span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Fonksyonalite</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Konsèy Nou</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pri</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Temwayaj</a>
                <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900" onClick={() => navigate('/login')}>
                Konekte
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => navigate('/quiz')}>
                Kòmanse Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="space-y-4 pt-4">
                <a href="#features" className="block text-gray-600 hover:text-gray-900">Fonksyonalite</a>
                <a href="#about" className="block text-gray-600 hover:text-gray-900">Konsèy Nou</a>
                <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pri</a>
                <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">Temwayaj</a>
                <a href="#blog" className="block text-gray-600 hover:text-gray-900">Blog</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" className="justify-start" onClick={() => navigate('/login')}>Konekte</Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => navigate('/quiz')}>Kòmanse Gratis</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Platfòm Ki Ka
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Chanje Lavi Ou
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Devlope bon abitid, swiv objektif ou yo, ak bati yon lavi ki gen sans ak platfòm ki pi konplè pou kwasans pèsonèl nan kominote Ayisyen an
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg" onClick={() => navigate('/quiz')}>
                <Play className="mr-2" size={20} />
                Kòmanse Jodi a - Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                Gade Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="text-yellow-400 fill-current mr-1" size={16} />
                <span className="font-medium">4.9/5 nan 2,000+ review</span>
              </div>
              <div className="flex items-center">
                <Users className="text-purple-500 mr-1" size={16} />
                <span className="font-medium">50,000+ itilizatè aktif</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-green-500 mr-1" size={16} />
                <span className="font-medium">100% sekirite done</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <Target className="text-purple-600 mb-4" size={32} />
                      <h3 className="font-semibold text-gray-900 mb-2">Swiv Objektif</h3>
                      <p className="text-sm text-gray-600">Defini ak rive nan objektif ou yo ak sistèm swivi avanse</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <BarChart3 className="text-blue-600 mb-4" size={32} />
                      <h3 className="font-semibold text-gray-900 mb-2">Analytics Pwofon</h3>
                      <p className="text-sm text-gray-600">Wè pwogre ou yo ak rapò detaye sou pèfòmans ou</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <Heart className="text-green-600 mb-4" size={32} />
                      <h3 className="font-semibold text-gray-900 mb-2">Byennèt Global</h3>
                      <p className="text-sm text-gray-600">Optimise sante fizik ak mental ou ak konsèy ekspè</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tout Sa Ou Bezwen Pou
              <span className="block text-purple-600">Reyisi Nan Lavi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platfòm nou an gen tout zouti ak fonksyonalite ou bezwen pou devlope bon abitid ak rive nan objektif ou yo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IA Pèsonalize</h3>
              <p className="text-gray-600 mb-6">
                Jwenn rekòmandasyon ak konsèy ki adapte ak bezwen ak objektif ou yo grâs ak entèlijans atifisyèl avanse
              </p>
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jesyon Tan</h3>
              <p className="text-gray-600 mb-6">
                Òganize jounen ou yo ak zouti jesyon tan ki ka ede ou rete konsantre sou sa ki pi enpòtan
              </p>
              <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistèm Rekonpans</h3>
              <p className="text-gray-600 mb-6">
                Rete motive ak sistèm rekonpans nou an ki bay badge, pwen ak defi pou kenbe ou angaje
              </p>
              <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-pink-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Swiv Sante</h3>
              <p className="text-gray-600 mb-6">
                Swiv sante fizik ak mental ou ak rapò detaye sou pwogre ou yo ak konsèy pou amelyore byennèt ou
              </p>
              <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kominote Aktif</h3>
              <p className="text-gray-600 mb-6">
                Konekte ak lòt moun ki gen menm objektif ak ou yo ak pataje eksperyans ak konsèy nan kominote nou an
              </p>
              <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zouti Pwodiktivite</h3>
              <p className="text-gray-600 mb-6">
                Ogmante pwodiktivite ou ak zouti ki ka ede ou konsantre ak fini travay ou yo pi vit ak pi byen
              </p>
              <Button variant="outline" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                Aprann Plis <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rezilta Ki Pale Pou Tèt Yo
            </h2>
            <p className="text-xl text-gray-600">
              Gade kijan Routin Anm ap ede moun yo rive nan objektif yo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Itilizatè Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Abitid Ki Devlope</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaksyon</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Sipò Kliyan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sa Kliyan Nou Yo Di
            </h2>
            <p className="text-xl text-gray-600">
              Temwayaj nan moun ki deja ap itilize Routin Anm ak wè rezilta yo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "Routin Anm chanje lavi mwen konplètman! Depi mwen kòmanse itilize li, mwen pi òganize ak mwen gen plis enèji pou fè bagay yo."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marie Dupont</div>
                  <div className="text-gray-500 text-sm">Entrepren</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "Mwen renmen kijan yo fè aplikasyon an nan lang nou an. Li fè mwen santi mwen lakay mwen ak li fasil pou konprann."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jean Baptiste</div>
                  <div className="text-gray-500 text-sm">Pwofesè</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "Fonksyonalite IA a ede mwen konprann ki abitid ki pi bon pou mwen. Rezilta yo depase sa mwen tap tann!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sabine Louis</div>
                  <div className="text-gray-500 text-sm">Doktè</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chwazi Plan Ki Bon Pou Ou
            </h2>
            <p className="text-xl text-gray-600">
              Kòmanse gratis ak upgrade lè ou prè pou fonksyonalite pi avanse yo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gratis</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <div className="text-gray-500">pou tout tan</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">5 abitid maksimòm</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Swiv debaz</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Rapò senmenn</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Sipò kominote</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" onClick={() => navigate('/quiz')}>
                Kòmanse Gratis
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Pi Popilè
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$9.99</div>
                <div className="text-gray-500">pa mwa</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Abitid san limit</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Analytics avanse</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Rekòmandasyon IA</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Sipò prioritè</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Ekspò done</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => navigate('/quiz')}>
                Chwazi Pro
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$19.99</div>
                <div className="text-gray-500">pa mwa</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Tout bagay nan Pro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Coach pèsonèl</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Plan kustom</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Aksè VIP kominote</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700">Sipò 24/7</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" onClick={() => navigate('/quiz')}>
                Chwazi Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pare Pou Kòmanse Vwayaj Ou?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Anrejistre kounye a ak kòmanse bati yon lavi ki pi bon ak Routin Anm
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg" onClick={() => navigate('/quiz')}>
              Kòmanse Gratis Kounye a
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Gade Demo
            </Button>
          </div>
          <p className="text-purple-100 mt-6">Pa gen ka kredi ki mande • Kansèl nenpòt lè</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                Routin <span className="text-purple-400">Anm</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Platfòm ki fèt pou kominote Ayisyen an ki vle devlope bon abitid ak bati yon lavi ki gen sans ak pwopò.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Prodwi</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fonksyonalite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Entegrasyon</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Konpanyi</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konsèy Nou</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karyè</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Laprès</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Sipò</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sant Èd</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kominote</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estati</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Routin Anm. Tout dwa rezève.</p>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Kondisyon Itilizasyon</a>
              <a href="#" className="hover:text-white transition-colors">Règleman Konfidansyalite</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
