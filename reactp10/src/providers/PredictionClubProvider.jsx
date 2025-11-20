import { useState, useCallback } from "react";
import { PredictionsClubContext } from "../context/PredictionsClubContext";
import { useDatabase } from "../hooks/useDatabase";

export function PredictionClubProvider({ userId, children }) {
  const { supabase } = useDatabase();
  const [clubPredictions, setClubPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClubPredictions = useCallback(
    async (fixtureId) => {
      if (!fixtureId || !userId) return;
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc("get_club_previews", {
          p_fixture_id: fixtureId,
          p_user_id: userId
        });

        if (error) throw error;
        setClubPredictions(data || []);
      } catch (err) {
        console.error("Error fetching club predictions:", err.message);
      } finally {
        setLoading(false);
      }
    },
    [supabase, userId]
  );

  return (
    <PredictionsClubContext.Provider
      value={{ clubPredictions, loading, fetchClubPredictions }}
    >
      {children}
    </PredictionsClubContext.Provider>
  );
}
