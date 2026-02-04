import { useState, useEffect, useCallback } from "react";
import { LeaderboardsUserContext } from "../context/LeaderboardsUserContext";
import { useDatabase } from "../hooks/useDatabase";

export function LeaderboardsUserProvider({ children }) {
  const { supabase } = useDatabase();
  const [weeklyUserLeaderboards, setWeeklyUserLeaderboards] = useState({});
  const [overallUserLeaderboard, setOverallUserLeaderboard] = useState([]);
  const [userLoading, setUserLoading] = useState(true);

  const loadUserLeaderboards = useCallback(async () => {
    setUserLoading(true);

    try {
      const { data: weeklyData, error: weeklyError } = await supabase.rpc("get_user_weekly_leaderboard");
      if (weeklyError) throw weeklyError;

      const grouped = weeklyData.reduce((acc, row) => {
        const gw = row.gameweek_id;
        if (!acc[gw]) acc[gw] = [];
        acc[gw].push(row);
        return acc;
      }, {});
      setWeeklyUserLeaderboards(grouped);

      const { data: overallData, error: overallError } = await supabase.rpc("get_user_leaderboard", { p_gameweek: null });
      if (overallError) throw overallError;

      setOverallUserLeaderboard(overallData || []);
    } catch (err) {
      console.error("USER LEADERBOARD ERROR:", err.message);
    } finally {
      setUserLoading(false);
    }
  }, [supabase]);

  // Initial load on mount
  useEffect(() => {
    loadUserLeaderboards();
  }, [loadUserLeaderboards]);

  return (
    <LeaderboardsUserContext.Provider
      value={{
        weeklyUserLeaderboards,
        overallUserLeaderboard,
        userLoading,
        refreshUserLeaderboards: loadUserLeaderboards,
      }}
    >
      {children}
    </LeaderboardsUserContext.Provider>
  );
}
