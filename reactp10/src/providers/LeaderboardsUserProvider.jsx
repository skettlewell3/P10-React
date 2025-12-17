import { useState, useEffect, useCallback } from "react";
import { LeaderboardsUserContext } from "../context/LeaderboardsUserContext";
import { useDatabase } from "../hooks/useDatabase";

export function LeaderboardsUserProvider({ children }) {
  const { supabase } = useDatabase();
  const [weeklyUserLeaderboards, setWeeklyUserLeaderboards] = useState({});
  const [overallUserLeaderboard, setOverallUserLeaderboard] = useState([]);
  const [userLoading, setUserLoading] = useState(true);

  // once-a-day refresh is fine for leaderboards outside live matches
  const REFRESH_INTERVAL = 1000 * 60 * 60 * 24;

  const fetchLeaderboards = useCallback(async () => {
    setUserLoading(true);

    try {
      // static weekly user leaderboards table
      const { data: weeklyData, error: weeklyError } = await supabase.rpc("get_user_weekly_leaderboard");

      if (weeklyError) throw weeklyError;

      // group the weekly data by gameweek_id for easy lookups
      const grouped = weeklyData.reduce((acc, row) => {
        const gw = row.gameweek_id;
        if (!acc[gw]) acc[gw] = [];
        acc[gw].push(row);
        return acc;
      }, {});

      setWeeklyUserLeaderboards(grouped);

      // overall user leaderboard via RPC
      const { data: overallData, error: overallError } = await supabase.rpc(
        "get_user_leaderboard",
        { p_gameweek: null } 
      );

      if (overallError) throw overallError;

      setOverallUserLeaderboard(overallData || []);
    } catch (err) {
      console.error("Error fetching leaderboards:", err.message);
    } finally {
      setUserLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchLeaderboards(); // initial
    const interval = setInterval(fetchLeaderboards, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchLeaderboards, REFRESH_INTERVAL]);

  return (
    <LeaderboardsUserContext.Provider
      value={{
        weeklyUserLeaderboards, // object grouped by week id
        overallUserLeaderboard, // overall standings
        userLoading,
        refreshUserLeaderboards: fetchLeaderboards,
      }}
    >
      {children}
    </LeaderboardsUserContext.Provider>
  );
}
