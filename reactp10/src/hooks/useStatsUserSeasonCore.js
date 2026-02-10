import { useContext } from "react";
import { StatsUserSeasonCoreContext } from "../context/StatsUserSeasonCoreContext";

export function useStatsUserSeasonCore() {
    const context = useContext(StatsUserSeasonCoreContext);
    if (!context) throw new Error("useStatsUserSeasonCore must be used inside StatsUserSeasonCoreProvider");

    const { 
        userSeasonCoreStats, 
        loading, 
        refreshUserSeasonCoreStats 
    } = context;

    return { 
      userSeasonCoreStats, 
      loading, 
      refreshUserSeasonCoreStats 
    };
}
