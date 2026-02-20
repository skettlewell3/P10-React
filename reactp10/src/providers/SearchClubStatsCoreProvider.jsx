import { useState, useCallback } from "react";
import { SearchClubStatsCoreContext } from "../context/SearchClubStatsCoreContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchClubStatsCoreProvider({ children }) {
  const { supabase } = useDatabase();

  const [clubStatsById, setClubStatsById] = useState({});
  const [loadingById, setLoadingById] = useState({});

  const fetchClubSeasonCoreStats = useCallback(
    async (targetClubId) => {
      if (!targetClubId || !supabase) return;

      // only set loading for this club if not cached
      if (!clubStatsById[targetClubId]) {
        setLoadingById(prev => ({ ...prev, [targetClubId]: true }));
      }

      try {
        const { data, error } = await supabase.rpc(
          "fetch_club_season_core_stats",
          { p_club_id: targetClubId }
        );
        if (error) throw error;

        setClubStatsById(prev => ({
          ...prev,
          [targetClubId]: data ?? []
        }));
      } catch (err) {
        console.error("SEARCH CLUB SEASON CORE ERROR:", err.message);
        setClubStatsById(prev => ({
          ...prev,
          [targetClubId]: []
        }));
      } finally {
        setLoadingById(prev => ({ ...prev, [targetClubId]: false }));
      }
    },
    [supabase, clubStatsById] 
  );

  return (
    <SearchClubStatsCoreContext.Provider
      value={{
        clubStatsById,
        loadingById,
        fetchClubSeasonCoreStats
      }}
    >
      {children}
    </SearchClubStatsCoreContext.Provider>
  );
}