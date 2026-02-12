import { useContext } from "react";
import { StatsClubSeasonHighsContext } from "../context/StatsClubSeasonHighsContext";

export function useStatsClubSeasonHighs() {
  const context = useContext(StatsClubSeasonHighsContext);

  if (!context) {
    throw new Error(
      "useStatsClubSeasonHighs must be used inside StatsClubSeasonHighsProvider"
    );
  }

  const {
    clubSeasonHighs,
    loading,
    refreshClubSeasonHighs,
  } = context;

  return {
    stats: clubSeasonHighs,
    loading,
    refreshClubSeasonHighs,
  };
}
