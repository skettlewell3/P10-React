import { useState, useEffect, useCallback } from "react";
import { StatsUserSeasonCoreContext } from "../context/StatsUserSeasonCoreContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function StatsUserSeasonCoreProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();
  const userId = user?.user_id;

  const [userSeasonCoreStats, setUserSeasonCoreStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUserSeasonCoreStats = useCallback(async () => {
    if (!userId || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc(
        "get_user_season_core_stats",
        { p_user_id: userId }
      );

      if (error) throw error;

      setUserSeasonCoreStats(data?.[0] ?? null);
    } catch (err) {
      console.error("USER SEASON CORE STATS PROVIDER ERROR:", err.message);
      setUserSeasonCoreStats(null);
    } finally {
      setLoading(false);
    }
  }, [supabase, userId]);

  useEffect(() => {
    refreshUserSeasonCoreStats();
  }, [refreshUserSeasonCoreStats]);

  return (
    <StatsUserSeasonCoreContext.Provider
        value={{
          userSeasonCoreStats,
          loading,
          refreshUserSeasonCoreStats,
        }}
    >
        {children}
    </StatsUserSeasonCoreContext.Provider>
  );
}
