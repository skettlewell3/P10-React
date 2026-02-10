import { useState, useEffect, useCallback } from 'react';
import { StatsClubLeagueTableContext } from "../context/StatsClubLeagueTableContext";
import { useDatabase } from '../hooks/useDatabase';
import { useUser } from '../hooks/useUser';

export function StatsClubLeagueTableProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();
  const userId = user?.user_id;

  const [clubStatsLeagueTable, setClubStatsLeagueTable] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshClubLeagueTable = useCallback(async () => {
    if (!userId || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("get_club_predicted_league_tables", {
        p_user_id: userId,
      });

      if (error) throw error;

      setClubStatsLeagueTable(data || []);
    } catch (err) {
      setClubStatsLeagueTable([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, userId]);

  // Fetch on mount / userId change
  useEffect(() => {
    refreshClubLeagueTable();
  }, [refreshClubLeagueTable]);

  return (
    <StatsClubLeagueTableContext.Provider
      value={{
        clubStatsLeagueTable,
        loading,
        refreshClubLeagueTable, 
      }}
    >
      {children}
    </StatsClubLeagueTableContext.Provider>
  );
}
