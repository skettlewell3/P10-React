import { useState, useCallback } from "react";
import { SearchUserPredictionsWeekContext } from "../context/SearchUserPredictionsWeekContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchUserPredictionsWeekProvider({ children }) {
  const { supabase } = useDatabase();

  const [predictionsByKey, setPredictionsByKey] = useState({});
  const [loadingByKey, setLoadingByKey] = useState({});

  

  const fetchPredictions = useCallback(
    async ({ userId, gameweek }) => {
      if (!userId || !gameweek || !supabase) return;

      const key = `${userId}-${gameweek}`;

      // Set loading
      setLoadingByKey(prev => ({ ...prev, [key]: true }));
      console.log("Calling RPC with:", { userId, gameweek });

      try {
        const { data, error } = await supabase.rpc(
          "fetch_user_target_weekly_predictions",
          { p_user_id: userId, p_gameweek: gameweek }
        );

        if (error) throw error;

        console.log("Fetched user predictions:", data, "for key:", key);

        setPredictionsByKey(prev => ({
          ...prev,
          [key]: data ?? []
        }));
      } catch (err) {
        console.error("USER WEEKLY PREDICTIONS ERROR:", err.message);
        setPredictionsByKey(prev => ({ ...prev, [key]: [] }));
      } finally {
        setLoadingByKey(prev => ({ ...prev, [key]: false }));
      }
    },
    [supabase]
  );

  return (
    <SearchUserPredictionsWeekContext.Provider
      value={{
        predictionsByKey,
        loadingByKey,
        fetchPredictions
      }}
    >
      {children}
    </SearchUserPredictionsWeekContext.Provider>
  );
}