import { useState, useCallback } from "react";
import { SearchClubStatsHighsContext } from "../context/SearchClubStatsHighsContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchClubStatsHighsProvider({ children }) {
  const { supabase } = useDatabase();

  const [clubHighsById, setClubHighsById] = useState({});
  const [loadingById, setLoadingById] = useState({});

  const fetchClubStatsHighs = useCallback(
    async (targetClubId) => {
      if (!targetClubId || !supabase) return;

      if (!clubHighsById[targetClubId]) {
        setLoadingById(prev => ({ ...prev, [targetClubId]: true }));
      }

      try {
        const { data, error } = await supabase.rpc(
          "fetch_club_season_highs",
          { p_club_id: targetClubId }
        );

        if (error) throw error;

        setClubHighsById(prev => ({
          ...prev,
          [targetClubId]: data ?? []
        }));
      } catch (err) {
        console.error("SEARCH CLUB STATS HIGHS ERROR:", err.message);
        setClubHighsById(prev => ({
          ...prev,
          [targetClubId]: []
        }));
      } finally {
        setLoadingById(prev => ({ ...prev, [targetClubId]: false }));
      }
    },
    [supabase, clubHighsById]
  );

  return (
    <SearchClubStatsHighsContext.Provider
      value={{
        clubHighsById,
        loadingById,
        fetchClubStatsHighs
      }}
    >
      {children}
    </SearchClubStatsHighsContext.Provider>
  );
}