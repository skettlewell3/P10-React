import { useState, useEffect } from "react";
import { PredictionsClubContext } from "../context/PredictionsClubContext";
import { useDatabase } from "../hooks/useDatabase";

export function PredictionClubProvider({ userId, children }) {
  const { supabase } = useDatabase();
  const [clubPredictions, setClubPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId || !supabase) return;

    async function loadClubPredictions() {
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc("get_club_previews_all", { 
          p_user_id: userId 
        });

        if (error) throw error;

        setClubPredictions(data || []);
      } catch (err) {
        console.error("CLUB PROVIDER ERROR:", err.message);
        setClubPredictions([]);
      } finally {
        setLoading(false);
      }
    }

    loadClubPredictions();
  }, [supabase, userId]);

  return (
    <PredictionsClubContext.Provider value={{ clubPredictions, loading }}>
      {children}
    </PredictionsClubContext.Provider>
  );
}
