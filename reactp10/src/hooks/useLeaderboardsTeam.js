import { useContext } from "react";
import { LeaderboardsTeamContext } from "../context/LeaderboardsTeamContext";

export function useLeaderboardsTeam() {
  const context = useContext(LeaderboardsTeamContext);
  if (!context) throw new Error("useLeaderboardsTeam must be used within LeaderboardProvider");
  return context;
}
