import { useContext } from "react";
import { PredictionsClubContext } from "../context/PredictionsClubContext";

export function usePredictionsClub() {
  const ctx = useContext(PredictionsClubContext);
  if (!ctx) throw new Error("usePredictionsClub must be used inside PredictionClubProvider");

  return {
    clubPredictions: ctx.clubPredictions,
    loading: ctx.loading,
    refresh: ctx.fetchClubPredictions
  };
}
