import { useContext } from "react";
import { SearchUserStatsHighsContext } from "../context/SearchUserStatsHighsContext";
import { SearchClubStatsHighsContext } from "../context/SearchClubStatsHighsContext";

export function useSearchAnyStatsHighs(subjectId, subjectType) {

  const userContext = useContext(SearchUserStatsHighsContext);
  const clubContext = useContext(SearchClubStatsHighsContext);

  if (!userContext) {
    throw new Error("Missing SearchUserStatsHighsProvider");
  }

  if (!clubContext) {
    throw new Error("Missing SearchClubStatsHighsProvider");
  }

  const {
    userHighsById,
    loadingById: userLoadingById,
    fetchUserStatsHighs
  } = userContext;

  const {
    clubHighsById,
    loadingById: clubLoadingById,
    fetchClubStatsHighs
  } = clubContext;

  const isUser = subjectType === "user";

  const statsById = isUser ? userHighsById : clubHighsById;
  const loadingById = isUser ? userLoadingById : clubLoadingById;
  const fetchStats = isUser ? fetchUserStatsHighs : fetchClubStatsHighs;

  return {
    statsById,
    loading: subjectId ? (loadingById[subjectId] ?? false) : false,
    fetchStats
  };
}