import { useState, useEffect, useCallback } from "react";
import { PredictionsUserContext } from "../context/PredictionsUserContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function PredictionUserProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [userPredictions, setUserPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserPredictions = useCallback(async () => {
    if (!user?.user_id || !supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc(
        "get_user_previews_all",
        { p_user_id: user.user_id }
      );      
      if (error) throw error;
      setUserPredictions(data ?? []);
    } catch (err) {
      console.error("USER PROVIDER ERROR:", err.message);
      setUserPredictions([]);
    } finally {
      setLoading(false);
    }
  }, [supabase, user?.user_id]);

  useEffect(() => {
    fetchUserPredictions();
  }, [fetchUserPredictions]);

  return (
    <PredictionsUserContext.Provider value={{ userPredictions, loading, fetchUserPredictions }}>
      {children}
    </PredictionsUserContext.Provider>
  );
}
