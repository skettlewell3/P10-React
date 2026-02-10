import { useState, useEffect, useCallback } from "react";
import { ScoringClubContext } from "../context/ScoringClubContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function ScoringClubProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [clubScoring, setClubScoring] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshClubScoring = useCallback(async () => {
    if (!user?.user_id || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc(
        "get_club_scoring_all",
        { p_user_id: user.user_id }
      );
      if (error) throw error;
      setClubScoring(data || []);
    } catch (err) {
      console.error("CLUB SCORING PROVIDER ERROR:", err.message);
      setClubScoring([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, user?.user_id]);

  useEffect(() => {
    refreshClubScoring();
  }, [refreshClubScoring]);

  return (
    <ScoringClubContext.Provider value={{ clubScoring, loading, refreshClubScoring }}>
      {children}
    </ScoringClubContext.Provider>
  );
}
