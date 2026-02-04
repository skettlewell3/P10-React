import { useContext } from "react";
import { LeaderboardsUserContext } from "../context/LeaderboardsUserContext";

export function useLeaderboardsUser() {
  const ctx = useContext(LeaderboardsUserContext);
  if (!ctx) throw new Error("useLeaderboardsUser must be used within LeaderboardsUserProvider");

  return {
    weeklyUserLeaderboards: ctx.weeklyUserLeaderboards,
    overallUserLeaderboard: ctx.overallUserLeaderboard,
    loading: ctx.userLoading,
    refresh: ctx.refreshUserLeaderboards, 
  };
}
