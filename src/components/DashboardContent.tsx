
import { HabitTracker } from "./HabitTracker";
import { SleepTracker } from "./SleepTracker";
import { BiometricDashboard } from "./BiometricDashboard";
import { GoalsProgress } from "./GoalsProgress";
import { GratitudeJournal } from "./GratitudeJournal";
import { AIRecommendations } from "./AIRecommendations";
import { QuickActions } from "./QuickActions";

export const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HabitTracker />
          <SleepTracker />
        </div>
        <BiometricDashboard />
        <GoalsProgress />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <GratitudeJournal />
        <AIRecommendations />
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardContent;
