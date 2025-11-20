import { useState, useCallback } from "react";
import { PredictionsUserContext } from "../context/PredictionsUserContext";
import { useDatabase } from "../hooks/useDatabase";

export function PredictionUserProvider({ userId, children }) {
  const { supabase } = useDatabase();
  const [userPredictions, setUserPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserPredictions = useCallback(
    async (fixtureId) => {
      if (!fixtureId || !userId) return;
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc("get_user_previews", {
          p_fixture_id: fixtureId,
          p_user_id: userId
        });

        if (error) throw error;
        setUserPredictions(data || []);
      } catch (err) {
        console.error("Error fetching user predictions:", err.message);
      } finally {
        setLoading(false);
      }
    },
    [supabase, userId]
  );

  return (
    <PredictionsUserContext.Provider
      value={{ userPredictions, loading, fetchUserPredictions }}
    >
      {children}
    </PredictionsUserContext.Provider>
  );
}
