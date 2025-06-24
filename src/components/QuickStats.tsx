
import { Heart, Zap, Moon, Brain } from "lucide-react";
import { MetricCard } from "./MetricCard";

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <MetricCard
        title="Kote Byennèt"
        value={87}
        unit="%"
        trend={12}
        icon={<Heart size={24} />}
        color="blue"
      />
      <MetricCard
        title="Streak Abitid"
        value={21}
        unit="jou"
        trend={5}
        icon={<Zap size={24} />}
        color="purple"
      />
      <MetricCard
        title="Kalite Dòmi"
        value={8.2}
        unit="/10"
        trend={-2}
        icon={<Moon size={24} />}
        color="cyan"
      />
      <MetricCard
        title="Konsantrasyon Mental"
        value={92}
        unit="%"
        trend={8}
        icon={<Brain size={24} />}
        color="green"
      />
    </div>
  );
};

export default QuickStats;
