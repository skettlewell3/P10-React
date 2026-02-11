import { useContext } from "react";
import { StatsClubSeasonCoreContext } from "../context/StatsClubSeasonCoreContext";

export function useStatsClubSeasonCore() {
  const context = useContext(StatsClubSeasonCoreContext);
  if (!context) throw new Error("useStatsClubSeasonCore must be used inside StatsClubSeasonCoreProvider");

    const { 
        clubSeasonCoreStats, 
        loading, 
        refreshClubSeasonCoreStats 
    } = context;

  return { 
        stats: clubSeasonCoreStats, 
        loading, 
        refreshClubSeasonCoreStats 
    };
}
