
import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Download, Share2, FileText, Image, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DataExport = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportData = async (format: 'json' | 'csv' | 'pdf') => {
    setIsExporting(true);
    
    // Simile ekspò done
    setTimeout(() => {
      const data = {
        habits: [
          { name: 'Meditasyon', completed: true, streak: 7 },
          { name: 'Egzèsis', completed: true, streak: 5 }
        ],
        goals: [
          { title: 'Li 12 liv', progress: 8, target: 12 }
        ],
        biometrics: {
          heartRate: 68,
          hrv: 42,
          temperature: 36.7
        },
        exportDate: new Date().toISOString()
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `routin-anm-export.${format}`;
      a.click();
      URL.revokeObjectURL(url);
      
      setIsExporting(false);
    }, 2000);
  };

  const shareProgress = () => {
    const text = `Mwen gen pwogre sou Routin Anm! 🎯\n\n✅ 21 jou streak abitid\n📚 8/12 liv li deja\n💪 87% kote byennèt\n\n#RoutinAnm #Devlopman`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Pwogre Mwen sou Routin Anm',
        text: text
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Kopi nan clipboard!');
    }
  };

  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4 text-gradient">Ekspò ak Pataje</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-white font-medium mb-2">Ekspò Done Yo</h4>
          <div className="grid grid-cols-3 gap-2">
            <Button
              onClick={() => exportData('json')}
              disabled={isExporting}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <FileText className="mr-2" size={16} />
              JSON
            </Button>
            <Button
              onClick={() => exportData('csv')}
              disabled={isExporting}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Download className="mr-2" size={16} />
              CSV
            </Button>
            <Button
              onClick={() => exportData('pdf')}
              disabled={isExporting}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Image className="mr-2" size={16} />
              PDF
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h4 className="text-white font-medium mb-2">Pataje Pwogre</h4>
          <Button
            onClick={shareProgress}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <Share2 className="mr-2" size={16} />
            Pataje Rezilta Yo
          </Button>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h4 className="text-white font-medium mb-2">Rapò Otomatik</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input type="checkbox" className="rounded" />
              <span>Rapò chak semèn nan email</span>
            </label>
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input type="checkbox" className="rounded" />
              <span>Rezime chak mwa</span>
            </label>
          </div>
        </div>
      </div>

      {isExporting && (
        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-300 text-sm">K ap prepare done yo...</p>
        </div>
      )}
    </GlassCard>
  );
};

export default DataExport;
