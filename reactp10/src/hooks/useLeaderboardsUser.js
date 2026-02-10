import { useContext } from "react";
import { LeaderboardsUserContext } from "../context/LeaderboardsUserContext";

export function useLeaderboardsUser() {
  const context = useContext(LeaderboardsUserContext);
  if (!context) throw new Error("useLeaderboardsUser must be used within LeaderboardsUserProvider");

  const {
    weeklyUserLeaderboards,
    overallUserLeaderboard,
    loading: userLoading,
    refreshUserLeaderboards
  } = context;

  return {
    weeklyUserLeaderboards,
    overallUserLeaderboard,
    loading: userLoading,
    refreshUserLeaderboards
  } ;
}
