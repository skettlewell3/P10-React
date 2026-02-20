import { useState, useCallback } from "react";
import { SearchUserStatsCoreContext } from "../context/SearchUserStatsCoreContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchUserStatsCoreProvider({ children }) {
  const { supabase } = useDatabase();

  const [userStatsById, setUserStatsById] = useState({});
  const [loadingById, setLoadingById] = useState({});

  const fetchUserSeasonCoreStats = useCallback(
    async (targetUserId) => {
      if (!targetUserId || !supabase) return;

      // only set loading for this user if not cached
      if (!userStatsById[targetUserId]) {
        setLoadingById(prev => ({ ...prev, [targetUserId]: true }));
      }

      try {
        const { data, error } = await supabase.rpc(
          "get_user_season_core_stats",
          { p_user_id: targetUserId }
        );
        if (error) throw error;

        setUserStatsById(prev => ({
          ...prev,
          [targetUserId]: data ?? []
        }));
      } catch (err) {
        console.error("SEARCH USER SEASON CORE ERROR:", err.message);
        setUserStatsById(prev => ({
          ...prev,
          [targetUserId]: []
        }));
      } finally {
        setLoadingById(prev => ({ ...prev, [targetUserId]: false }));
      }
    },
    [supabase, userStatsById] // removed userStatsById from deps
  );

  return (
    <SearchUserStatsCoreContext.Provider
      value={{
        userStatsById,
        loadingById,
        fetchUserSeasonCoreStats
      }}
    >
      {children}
    </SearchUserStatsCoreContext.Provider>
  );
}
