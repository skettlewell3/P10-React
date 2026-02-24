import { useState, useCallback } from "react";
import { SearchClubStatsPLTContext } from "../context/SearchClubStatsPLTContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchClubStatsPLTProvider({ children }) {
  const { supabase } = useDatabase();

  const [clubPLTById, setClubPLTById] = useState({});
  const [loadingById, setLoadingById] = useState({});

  const fetchClubPLT = useCallback(
    async (targetClubId) => {
      if (!targetClubId || !supabase) return;

      if (!clubPLTById[targetClubId]) {
        setLoadingById(prev => ({
          ...prev,
          [targetClubId]: true
        }));
      }

      try {
        const { data, error } = await supabase.rpc(
          "fetch_club_predicted_league_table",
          { p_club_id: targetClubId }
        );

        if (error) throw error;

        setClubPLTById(prev => ({
          ...prev,
          [targetClubId]: data ?? []
        }));

      } catch (err) {
        console.error("CLUB PLT ERROR:", err.message);

        setClubPLTById(prev => ({
          ...prev,
          [targetClubId]: []
        }));

      } finally {
        setLoadingById(prev => ({
          ...prev,
          [targetClubId]: false
        }));
      }
    },
    [supabase, clubPLTById]
  );

  return (
    <SearchClubStatsPLTContext.Provider
      value={{
        clubPLTById,
        loadingById,
        fetchClubPLT
      }}
    >
      {children}
    </SearchClubStatsPLTContext.Provider>
  );
}