import { useState, useEffect, useCallback } from 'react';
import { StatsUserLeagueTableContext } from "../context/StatsUserLeagueTableContext";
import { useDatabase } from '../hooks/useDatabase';
import { useUser } from '../hooks/useUser';

export function StatsUserLeagueTableProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();
  const userId = user?.user_id;

  const [userStatsLeagueTable, setUserStatsLeagueTable] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch function wrapped in useCallback
  const fetchUserLeagueTable = useCallback(async () => {
    if (!userId || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("get_user_predicted_league_table", {
        p_user_id: userId,
      });

      if (error) throw error;

      setUserStatsLeagueTable(data || []);
    //   console.log("userLeagueTableProvider refreshed", data);
    } catch (err) {
      console.log("USER LEAGUE TABLE PROVIDER ERROR", err.message);
      setUserStatsLeagueTable([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, userId]);

  // Fetch on mount / userId change
  useEffect(() => {
    fetchUserLeagueTable();
  }, [fetchUserLeagueTable]);

  return (
    <StatsUserLeagueTableContext.Provider 
      value={{ 
        userStatsLeagueTable, 
        loading, 
        fetchUserLeagueTable  // expose the fetch function for refreshAll
      }}
    >
      {children}
    </StatsUserLeagueTableContext.Provider>
  );
}
