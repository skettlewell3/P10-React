import { useContext } from "react";
import { SearchClubStatsCoreContext } from "../context/SearchClubStatsCoreContext";

export function useSearchClubStatsCore(subjectId) {
  const context = useContext(SearchClubStatsCoreContext);
  if (!context) throw new Error(
    "useSearchClubStatsCore must be used inside SearchClubStatsCoreProvider"
  );

  const { clubStatsById, loadingById, fetchClubSeasonCoreStats } = context;

  return {
    stats: clubStatsById,
    loading: subjectId ? (loadingById[subjectId] ?? false) : false,
    fetchClubSeasonCoreStats
  };
}