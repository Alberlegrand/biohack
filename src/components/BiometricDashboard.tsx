
import { GlassCard } from "./GlassCard";
import { Activity, Heart, Thermometer, Droplets } from "lucide-react";

export const BiometricDashboard = () => {
  const metrics = [
    {
      label: "Fréquence Cardiaque",
      value: "68",
      unit: "bpm",
      status: "normal",
      icon: <Heart size={20} />,
      color: "text-red-400"
    },
    {
      label: "HRV",
      value: "42",
      unit: "ms",
      status: "bon",
      icon: <Activity size={20} />,
      color: "text-green-400"
    },
    {
      label: "Température",
      value: "36.7",
      unit: "°C",
      status: "normal",
      icon: <Thermometer size={20} />,
      color: "text-blue-400"
    },
    {
      label: "Hydratation",
      value: "75",
      unit: "%",
      status: "bon",
      icon: <Droplets size={20} />,
      color: "text-cyan-400"
    }
  ];

  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4 text-gradient">Métriques Biométriques</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-2 mb-2">
              <div className={metric.color}>{metric.icon}</div>
              <span className="text-xs text-gray-400 uppercase tracking-wide">{metric.label}</span>
            </div>
            
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xl font-bold text-white">{metric.value}</span>
                <span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                metric.status === 'normal' ? 'bg-green-500/20 text-green-300' :
                metric.status === 'bon' ? 'bg-blue-500/20 text-blue-300' :
                'bg-orange-500/20 text-orange-300'
              }`}>
                {metric.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Dernière mesure</span>
          <span className="text-white">Il y a 5 minutes</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default BiometricDashboard;
