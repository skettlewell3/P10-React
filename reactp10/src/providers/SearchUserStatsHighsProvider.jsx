import { useState, useCallback } from "react";
import { SearchUserStatsHighsContext } from "../context/SearchUserStatsHighsContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchUserStatsHighsProvider({ children }) {
  const { supabase } = useDatabase();

  const [userHighsById, setUserHighsById] = useState({});
  const [loadingById, setLoadingById] = useState({});

  const fetchUserStatsHighs = useCallback(
    async (targetUserId) => {
      if (!targetUserId || !supabase) return;

      if (!userHighsById[targetUserId]) {
        setLoadingById(prev => ({ ...prev, [targetUserId]: true }));
      }

      try {
        const { data, error } = await supabase.rpc(
          "get_user_season_highs",
          { p_user_id: targetUserId }
        );

        if (error) throw error;

        setUserHighsById(prev => ({
          ...prev,
          [targetUserId]: data ?? []
        }));
      } catch (err) {
        console.error("SEARCH USER STATS HIGHS ERROR:", err.message);
        setUserHighsById(prev => ({
          ...prev,
          [targetUserId]: []
        }));
      } finally {
        setLoadingById(prev => ({ ...prev, [targetUserId]: false }));
      }
    },
    [supabase, userHighsById]
  );

  return (
    <SearchUserStatsHighsContext.Provider
      value={{
        userHighsById,
        loadingById,
        fetchUserStatsHighs
      }}
    >
      {children}
    </SearchUserStatsHighsContext.Provider>
  );
}