import { useState, useCallback, useEffect } from "react";
import { StatsUserSeasonHighsContext } from "../context/StatsUserSeasonHighsContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function StatsUserSeasonHighsProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();
  const userId = user?.user_id;

  const [userSeasonHighs, setUserSeasonHighs] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUserSeasonHighs = useCallback(async () => {
    if (!userId || !supabase) return;

    setLoading(true);

    try {
      const { data, error } = await supabase.rpc(
        "get_user_season_highs",
        { p_user_id: userId }
      );

      if (error) throw error;
      console.log("user highs stats,", data)
      setUserSeasonHighs(data ?? null);
    } catch (err) {
      console.error("USER SEASON HIGHS PROVIDER ERROR:", err.message);
      setUserSeasonHighs(null);
    } finally {
      setLoading(false);
    }
  }, [supabase, userId]);

  useEffect(() => {
    refreshUserSeasonHighs();
  }, [refreshUserSeasonHighs]);

  return (
    <StatsUserSeasonHighsContext.Provider
      value={{
        userSeasonHighs,
        loading,
        refreshUserSeasonHighs,
      }}
    >
      {children}
    </StatsUserSeasonHighsContext.Provider>
  );
}
