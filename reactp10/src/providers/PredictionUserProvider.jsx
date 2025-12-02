import { useState, useEffect } from "react";
import { PredictionsUserContext } from "../context/PredictionsUserContext";
import { useDatabase } from "../hooks/useDatabase";

export function PredictionUserProvider({ userId, children }) {
  const { supabase } = useDatabase();
  const [userPredictions, setUserPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId || !supabase) return;

    async function loadUserPredictions() {
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc("get_user_previews_all", {
          p_user_id: userId,
        });

        if (error) throw error;

        setUserPredictions(data || []);
        // console.log('UserDataProvider:', data);
      } catch (err) {
        console.error("USER PROVIDER ERROR:", err.message);
        setUserPredictions([]);
      } finally {
        setLoading(false);
      }
    }

    loadUserPredictions();
  }, [supabase, userId]);


  return (
    <PredictionsUserContext.Provider value={{ userPredictions, loading }}>
      {children}
    </PredictionsUserContext.Provider>
  );
}
