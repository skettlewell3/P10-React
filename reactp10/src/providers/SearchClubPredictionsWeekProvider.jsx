import { useState, useCallback } from "react";
import { SearchClubPredictionsWeekContext } from "../context/SearchClubPredictionsWeekContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchClubPredictionsWeekProvider({ children }) {
  const { supabase } = useDatabase();

  const [predictionsByKey, setPredictionsByKey] = useState({});
  const [loadingByKey, setLoadingByKey] = useState({});

  const fetchPredictions = useCallback(
    async ({ clubId, gameweek }) => {
      if (!clubId || !gameweek || !supabase) return;

      const key = `${clubId}-${gameweek}`;

      setLoadingByKey(prev => ({ ...prev, [key]: true }));

      try {
        const { data, error } = await supabase.rpc(
          "fetch_club_target_weekly_predictions",
          { p_club_id: clubId, p_gameweek: gameweek }
        );

        if (error) throw error;

        setPredictionsByKey(prev => ({
          ...prev,
          [key]: data ?? []
        }));
      } catch (err) {
        console.error("CLUB WEEKLY PREDICTIONS ERROR:", err.message);
        setPredictionsByKey(prev => ({ ...prev, [key]: [] }));
      } finally {
        setLoadingByKey(prev => ({ ...prev, [key]: false }));
      }
    },
    [supabase]
  );

  return (
    <SearchClubPredictionsWeekContext.Provider
      value={{
        predictionsByKey,
        loadingByKey,
        fetchPredictions
      }}
    >
      {children}
    </SearchClubPredictionsWeekContext.Provider>
  );
}