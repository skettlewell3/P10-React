import { useState, useEffect, useCallback } from "react";
import { LeaderboardsContext } from "../context/LeaderboardsContext";
import { useDatabase } from "../hooks/useDatabase";

export function LeaderboardsProvider({ children }) {
  const { supabase } = useDatabase();
  const [weeklyLeaderboards, setWeeklyLeaderboards] = useState({});
  const [overallLeaderboard, setOverallLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  // once-a-day refresh is fine for leaderboards outside live matches
  const REFRESH_INTERVAL = 1000 * 60 * 60 * 24;

  const fetchLeaderboards = useCallback(async () => {
    setLoading(true);

    try {
      // static weekly leaderboards table
      const { data: weeklyData, error: weeklyError } = await supabase
        .from("weekly_user_leaderboard")
        .select("*");

      if (weeklyError) throw weeklyError;

      // group the weekly data by gameweek_id for easy lookups
      const grouped = weeklyData.reduce((acc, row) => {
        const gw = row.gameweek_id;
        if (!acc[gw]) acc[gw] = [];
        acc[gw].push(row);
        return acc;
      }, {});

      setWeeklyLeaderboards(grouped);

      // overall leaderboard via RPC
      const { data: overallData, error: overallError } = await supabase.rpc(
        "get_user_leaderboard",
        { p_gameweek: null } 
      );

      if (overallError) throw overallError;

      setOverallLeaderboard(overallData || []);
    } catch (err) {
      console.error("Error fetching leaderboards:", err.message);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchLeaderboards(); // initial
    const interval = setInterval(fetchLeaderboards, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchLeaderboards, REFRESH_INTERVAL]);

  return (
    <LeaderboardsContext.Provider
      value={{
        weeklyLeaderboards, // object grouped by week id
        overallLeaderboard, // overall standings
        loading,
        refreshLeaderboards: fetchLeaderboards,
      }}
    >
      {children}
    </LeaderboardsContext.Provider>
  );
}
