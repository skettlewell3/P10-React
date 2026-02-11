import { useState, useEffect, useCallback } from "react";
import { StatsClubSeasonCoreContext } from "../context/StatsClubSeasonCoreContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function StatsClubSeasonCoreProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();
  const userId = user?.user_id;

  const [clubSeasonCoreStats, setClubSeasonCoreStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshClubSeasonCoreStats = useCallback(async () => {
    if (!userId || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc(
        "get_club_season_core_stats",
        { p_user_id: userId }
      );

      if (error) throw error;
      console.log("club core stats,", data)
      setClubSeasonCoreStats(data ?? []);
    } catch (err) {
      console.error("CLUB SEASON CORE STATS PROVIDER ERROR:", err.message);
      setClubSeasonCoreStats(null);
    } finally {
      setLoading(false);
    }
  }, [supabase, userId]);

  useEffect(() => {
    refreshClubSeasonCoreStats();
  }, [refreshClubSeasonCoreStats]);

  return (
    <StatsClubSeasonCoreContext.Provider
      value={{
        clubSeasonCoreStats,
        loading,
        refreshClubSeasonCoreStats,
      }}
    >
      {children}
    </StatsClubSeasonCoreContext.Provider>
  );
}
