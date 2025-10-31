import { useState, useEffect, useCallback } from "react";
import { LeaderboardContext } from "../context/LeaderboardContext";
import { useDatabase } from "../hooks/useDatabase";

export function LeaderboardProvider({ children }) {
  const { supabase } = useDatabase();
  const [weeklyLeaderboards, setWeeklyLeaderboards] = useState([]);
  const [overallLeaderboard, setOverallLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  const REFRESH_INTERVAL = 1000 * 60 * 60 * 24;

  const fetchLeaderboards = useCallback(async () => {
    setLoading(true);

    // static weekly leaderboards table
    const { data: weeklyData, error: weeklyError } = await supabase
      .from("weekly_leaderboards")
      .select("*");

    if (weeklyError) console.error("Error fetching weekly leaderboards:", weeklyError);
    else setWeeklyLeaderboards(weeklyData || []);

    //  overall leaderboard via RPC
    const { data: overallData, error: overallError } = await supabase.rpc(
      "get_user_leaderboard",
      { gw_id: null }
    );

    if (overallError) console.error("Error fetching overall leaderboard:", overallError);
    else setOverallLeaderboard(overallData || []);

    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchLeaderboards(); // initial
    const interval = setInterval(fetchLeaderboards, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchLeaderboards, REFRESH_INTERVAL]);

  return (
    <LeaderboardContext.Provider
      value={{
        weeklyLeaderboards,
        overallLeaderboard,
        loading,
        refreshLeaderboards: fetchLeaderboards,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
}
