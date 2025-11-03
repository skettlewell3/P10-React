import { useContext } from "react";
import { LeaderboardsContext } from "../context/LeaderboardsContext";

export function useLeaderboards() {
  const context = useContext(LeaderboardsContext);
  if (!context) throw new Error("useLeaderboard must be used within LeaderboardProvider");
  return context;
}
