
import { GlassCard } from "./GlassCard";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";

export const GratitudeJournal = () => {
  const [gratitudes, setGratitudes] = useState([
    "Ma famille en bonne santé",
    "Une journée ensoleillée",
    "Mon progrès en méditation"
  ]);
  const [newGratitude, setNewGratitude] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const addGratitude = () => {
    if (newGratitude.trim()) {
      setGratitudes([...gratitudes, newGratitude.trim()]);
      setNewGratitude("");
      setIsAdding(false);
    }
  };

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gradient">Journal de Gratitude</h3>
        <Heart className="text-red-400" size={20} />
      </div>
      
      <div className="space-y-3 mb-4">
        {gratitudes.map((gratitude, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300 text-sm">{gratitude}</span>
          </div>
        ))}
      </div>

      {isAdding ? (
        <div className="space-y-3">
          <input
            type="text"
            value={newGratitude}
            onChange={(e) => setNewGratitude(e.target.value)}
            placeholder="Pour quoi êtes-vous reconnaissant aujourd'hui ?"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onKeyPress={(e) => e.key === 'Enter' && addGratitude()}
            autoFocus
          />
          <div className="flex space-x-2">
            <button
              onClick={addGratitude}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Ajouter
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-all"
            >
              Annuler
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg border-2 border-dashed border-white/20 text-gray-400 hover:border-purple-400 hover:text-purple-400 transition-all"
        >
          <Plus size={20} />
          <span>Ajouter une gratitude</span>
        </button>
      )}
    </GlassCard>
  );
};

export default GratitudeJournal;
