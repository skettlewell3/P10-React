import { useState, useEffect, useCallback } from "react";
import { StatsClubSeasonHighsContext } from "../context/StatsClubSeasonHighsContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function StatsClubSeasonHighsProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();
  const userId = user?.user_id;

  const [clubSeasonHighs, setClubSeasonHighs] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshClubSeasonHighs = useCallback(async () => {
    if (!userId || !supabase) return;

    setLoading(true);

    try {
      const { data, error } = await supabase.rpc(
        "get_club_season_highs",
        { p_user_id: userId }
      );

      if (error) throw error;

      setClubSeasonHighs(data ?? []);
      console.log("club highs stats,", data)
    } catch (err) {
      console.error("CLUB SEASON HIGHS PROVIDER ERROR:", err.message);
      setClubSeasonHighs([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, userId]);

  useEffect(() => {
    refreshClubSeasonHighs();
  }, [refreshClubSeasonHighs]);

  return (
    <StatsClubSeasonHighsContext.Provider
      value={{
        clubSeasonHighs,
        loading,
        refreshClubSeasonHighs,
      }}
    >
      {children}
    </StatsClubSeasonHighsContext.Provider>
  );
}
