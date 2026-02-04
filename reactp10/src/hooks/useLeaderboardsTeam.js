import { useContext } from "react";
import { LeaderboardsTeamContext } from "../context/LeaderboardsTeamContext";

export function useLeaderboardsTeam() {
  const ctx = useContext(LeaderboardsTeamContext);
  if (!ctx) throw new Error("useLeaderboardsTeam must be used within LeaderboardsTeamProvider");

  return {
    weeklyTeamLeaderboards: ctx.weeklyTeamLeaderboards,
    overallTeamLeaderboard: ctx.overallTeamLeaderboard,
    loading: ctx.teamLoading,
    refresh: ctx.refreshTeamLeaderboards, 
  };
}
