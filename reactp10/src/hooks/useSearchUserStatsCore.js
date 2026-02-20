import { useContext } from "react";
import { SearchUserStatsCoreContext } from "../context/SearchUserStatsCoreContext";

export function useSearchUserStatsCore(subjectId) {
  const context = useContext(SearchUserStatsCoreContext);
  if (!context) throw new Error(
    "useSearchUserSeasonCore must be used inside SearchUserSeasonCoreProvider"
  );

  const { userStatsById, loadingById, fetchUserSeasonCoreStats } = context;

  return { 
    stats: userStatsById,   
    loading: subjectId ? (loadingById[subjectId] ?? false) : false,
    fetchUserSeasonCoreStats
  };
}
