import { useState, useEffect, useCallback } from "react";
import { PredictionsClubContext } from "../context/PredictionsClubContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function PredictionClubProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [clubPredictions, setClubPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClubPredictions = useCallback(async () => {
    if (!user?.user_id || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc(
        "get_club_previews_all",
        { p_user_id: user.user_id }
      );
      if (error) throw error;
      setClubPredictions(data ?? []);
    } catch (err) {
      console.error("CLUB PROVIDER ERROR:", err.message);
      setClubPredictions([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, user?.user_id]);

  useEffect(() => {
    fetchClubPredictions();
  }, [fetchClubPredictions]);

  return (
    <PredictionsClubContext.Provider value={{ clubPredictions, loading, fetchClubPredictions }}>
      {children}
    </PredictionsClubContext.Provider>
  );
}
