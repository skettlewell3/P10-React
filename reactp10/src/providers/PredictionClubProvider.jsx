import { useState, useEffect } from "react";
import { PredictionsClubContext } from "../context/PredictionsClubContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function PredictionClubProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [clubPredictions, setClubPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // HARD GUARD — do nothing until everything exists
    if (!user?.user_id || !supabase) {
      setClubPredictions([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadClubPredictions() {
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc(
          "get_club_previews_all",
          { p_user_id: user.user_id }
        );

        if (error) throw error;

        if (!cancelled) {
          setClubPredictions(data ?? []);
        }
      } catch (err) {
        console.error("CLUB PROVIDER ERROR:", err.message);
        if (!cancelled) setClubPredictions([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadClubPredictions();

    return () => {
      cancelled = true;
    };
  }, [supabase, user?.user_id]);

  return (
    <PredictionsClubContext.Provider value={{ clubPredictions, loading }}>
      {children}
    </PredictionsClubContext.Provider>
  );
}
