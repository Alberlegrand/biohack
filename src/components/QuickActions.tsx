
import { GlassCard } from "./GlassCard";

export const QuickActions = () => {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4 text-gradient">Aksyon Rapid</h3>
      <div className="space-y-2">
        <button className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-left hover:from-blue-500/30 hover:to-purple-500/30 transition-all">
          <span className="text-white font-medium">Kòmanse sesyon meditasyon</span>
        </button>
        <button className="w-full p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-left hover:from-green-500/30 hover:to-emerald-500/30 transition-all">
          <span className="text-white font-medium">Anrejistre antrènman</span>
        </button>
        <button className="w-full p-3 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-left hover:from-orange-500/30 hover:to-red-500/30 transition-all">
          <span className="text-white font-medium">Pran mezi byometrik</span>
        </button>
      </div>
    </GlassCard>
  );
};

export default QuickActions;
