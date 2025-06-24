
import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, Target, Activity } from "lucide-react";

export const AdvancedAnalytics = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  const habitData = [
    { name: 'Lindi', meditasyon: 1, egzèsis: 1, lekti: 0, dlo: 8 },
    { name: 'Madi', meditasyon: 1, egzèsis: 0, lekti: 1, dlo: 6 },
    { name: 'Mèkredi', meditasyon: 1, egzèsis: 1, lekti: 1, dlo: 7 },
    { name: 'Jedi', meditasyon: 0, egzèsis: 1, lekti: 1, dlo: 8 },
    { name: 'Vandredi', meditasyon: 1, egzèsis: 1, lekti: 0, dlo: 5 },
    { name: 'Samdi', meditasyon: 1, egzèsis: 0, lekti: 1, dlo: 9 },
    { name: 'Dimanch', meditasyon: 1, egzèsis: 1, lekti: 1, dlo: 8 }
  ];

  const wellnessData = [
    { name: 'Semèn 1', kote: 75 },
    { name: 'Semèn 2', kote: 82 },
    { name: 'Semèn 3', kote: 79 },
    { name: 'Semèn 4', kote: 87 }
  ];

  const categoryData = [
    { name: 'Mental', value: 35, color: '#8B5CF6' },
    { name: 'Fizik', value: 30, color: '#10B981' },
    { name: 'Sosyal', value: 20, color: '#F59E0B' },
    { name: 'Pwofesyonèl', value: 15, color: '#EF4444' }
  ];

  const insights = [
    {
      icon: <TrendingUp className="text-green-400" size={20} />,
      title: 'Pwogre Pozitif',
      description: 'Kote byennèt ou ogmante 15% nan mwa ki pase a',
      trend: '+15%'
    },
    {
      icon: <Calendar className="text-blue-400" size={20} />,
      title: 'Konsistans',
      description: 'Ou kenbe abitid yo 6 jou sou 7 nan semèn',
      trend: '86%'
    },
    {
      icon: <Target className="text-purple-400" size={20} />,
      title: 'Objektif',
      description: '3 sou 5 objektif yo sou bon wout',
      trend: '60%'
    }
  ];

  return (
    <div className="space-y-6">
      <GlassCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gradient">Analytics Avanse</h3>
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1 text-sm"
          >
            <option value="7d">7 jou</option>
            <option value="30d">30 jou</option>
            <option value="90d">90 jou</option>
            <option value="1y">1 ane</option>
          </select>
        </div>

        {/* Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center space-x-3 mb-2">
                {insight.icon}
                <span className="text-sm text-gray-300">{insight.title}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{insight.description}</p>
              <span className="text-lg font-bold text-green-400">{insight.trend}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Habit Tracking Chart */}
      <GlassCard>
        <h4 className="text-lg font-semibold text-white mb-4">Swiv Abitid yo nan Semèn</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={habitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Bar dataKey="meditasyon" fill="#8B5CF6" name="Meditasyon" />
              <Bar dataKey="egzèsis" fill="#10B981" name="Egzèsis" />
              <Bar dataKey="lekti" fill="#F59E0B" name="Lekti" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wellness Trend */}
        <GlassCard>
          <h4 className="text-lg font-semibold text-white mb-4">Evolisyon Byennèt</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={wellnessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line 
                  type="monotone" 
                  dataKey="kote" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Category Distribution */}
        <GlassCard>
          <h4 className="text-lg font-semibold text-white mb-4">Repartisyon Kategori</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-300">{item.name}</span>
                <span className="text-sm text-gray-400">{item.value}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
