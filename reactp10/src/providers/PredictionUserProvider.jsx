import { useState, useEffect } from "react";
import { PredictionsUserContext } from "../context/PredictionsUserContext";
import { useDatabase } from "../hooks/useDatabase";
import { useUser } from "../hooks/useUser";

export function PredictionUserProvider({ children }) {
  const { supabase } = useDatabase();
  const { user } = useUser();

  const [userPredictions, setUserPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.user_id || !supabase) {
      setUserPredictions([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function loadUserPredictions() {
      setLoading(true);

      try {
        const { data, error } = await supabase.rpc(
          "get_user_previews_all",
          { p_user_id: user.user_id }
        );

        if (error) throw error;
        if (cancelled) return;

        setUserPredictions(data || []);
      } catch (err) {
        if (!cancelled) {
          console.error("USER PROVIDER ERROR:", err.message);
          setUserPredictions([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadUserPredictions();

    return () => {
      cancelled = true;
    };
  }, [supabase, user?.user_id]);

  return (
    <PredictionsUserContext.Provider value={{ userPredictions, loading }}>
      {children}
    </PredictionsUserContext.Provider>
  );
}
