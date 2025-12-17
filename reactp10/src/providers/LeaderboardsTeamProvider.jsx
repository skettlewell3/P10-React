import { useState, useEffect, useCallback } from "react";
import { LeaderboardsTeamContext } from "../context/LeaderboardsTeamContext";
import { useDatabase } from "../hooks/useDatabase";

export function LeaderboardsTeamProvider({ children }) {
  const { supabase } = useDatabase();
  const [weeklyTeamLeaderboards, setWeeklyTeamLeaderboards] = useState({});
  const [overallTeamLeaderboard, setOverallTeamLeaderboard] = useState([]);
  const [teamLoading, setTeamLoading] = useState(true);

  // once-a-day refresh for leaderboards outside live matches
  const REFRESH_INTERVAL = 1000 * 60 * 60 * 24;

  const fetchLeaderboards = useCallback(async () => {
    setTeamLoading(true);

    try {
      // static weekly user leaderboards table
      const { data: weeklyData, error: weeklyError } = await supabase.rpc("get_club_weekly_leaderboard");

      if (weeklyError) throw weeklyError;

      // group the weekly data by gameweek_id for easy lookups
      const grouped = weeklyData.reduce((acc, row) => {
        const gw = row.gameweek_id;
        if (!acc[gw]) acc[gw] = [];
        acc[gw].push(row);
        return acc;
      }, {});

      setWeeklyTeamLeaderboards(grouped);

      // overall user leaderboard via RPC
      const { data: overallData, error: overallError } = await supabase.rpc(
        "get_club_leaderboard",
        { p_gameweek: null } 
      );

      if (overallError) throw overallError;

      setOverallTeamLeaderboard(overallData || []);
    } catch (err) {
      console.error("Error fetching leaderboards:", err.message);
    } finally {
      setTeamLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchLeaderboards(); // initial
    const interval = setInterval(fetchLeaderboards, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchLeaderboards, REFRESH_INTERVAL]);

  return (
    <LeaderboardsTeamContext.Provider
      value={{
        weeklyTeamLeaderboards, // object grouped by week id
        overallTeamLeaderboard, // overall standings
        teamLoading,
        refreshTeamLeaderboards: fetchLeaderboards,
      }}
    >
      {children}
    </LeaderboardsTeamContext.Provider>
  );
}
