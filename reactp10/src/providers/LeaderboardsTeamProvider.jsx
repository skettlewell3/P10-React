import { useState, useEffect, useCallback } from "react";
import { LeaderboardsTeamContext } from "../context/LeaderboardsTeamContext";
import { useDatabase } from "../hooks/useDatabase";

export function LeaderboardsTeamProvider({ children }) {
  const { supabase } = useDatabase();
  const [weeklyTeamLeaderboards, setWeeklyTeamLeaderboards] = useState({});
  const [overallTeamLeaderboard, setOverallTeamLeaderboard] = useState([]);
  const [teamLoading, setTeamLoading] = useState(true);

  const loadTeamLeaderboards = useCallback(async () => {
    setTeamLoading(true);

    try {
      const { data: weeklyData, error: weeklyError } = await supabase.rpc("get_club_weekly_leaderboard");
      if (weeklyError) throw weeklyError;

      const grouped = weeklyData.reduce((acc, row) => {
        const gw = row.gameweek_id;
        if (!acc[gw]) acc[gw] = [];
        acc[gw].push(row);
        return acc;
      }, {});
      setWeeklyTeamLeaderboards(grouped);

      const { data: overallData, error: overallError } = await supabase.rpc("get_club_leaderboard", { p_gameweek: null });
      if (overallError) throw overallError;

      setOverallTeamLeaderboard(overallData || []);
    } catch (err) {
      console.error("TEAM LEADERBOARD ERROR:", err.message);
    } finally {
      setTeamLoading(false);
    }
  }, [supabase]);

  // Initial load on mount
  useEffect(() => {
    loadTeamLeaderboards();
  }, [loadTeamLeaderboards]);

  return (
    <LeaderboardsTeamContext.Provider
      value={{
        weeklyTeamLeaderboards,
        overallTeamLeaderboard,
        teamLoading,
        refreshTeamLeaderboards: loadTeamLeaderboards,
      }}
    >
      {children}
    </LeaderboardsTeamContext.Provider>
  );
}
