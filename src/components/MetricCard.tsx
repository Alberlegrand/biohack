
import { GlassCard } from "./GlassCard";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: number;
  icon: React.ReactNode;
  color?: string;
}

export const MetricCard = ({ title, value, unit, trend, icon, color = "blue" }: MetricCardProps) => {
  const colorClasses = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
    green: "text-green-400",
    orange: "text-orange-400"
  };

  return (
    <GlassCard hover className="relative overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${
          color === 'blue' ? 'from-blue-500/20 to-purple-500/20' :
          color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
          color === 'cyan' ? 'from-cyan-500/20 to-blue-500/20' :
          color === 'green' ? 'from-green-500/20 to-emerald-500/20' :
          'from-orange-500/20 to-red-500/20'
        }`}>
          <div className={colorClasses[color as keyof typeof colorClasses]}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${
            trend > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="ml-1">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-1">{title}</p>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-white">{value}</span>
          {unit && <span className="text-sm text-gray-400 ml-1">{unit}</span>}
        </div>
      </div>
    </GlassCard>
  );
};

export default MetricCard;
