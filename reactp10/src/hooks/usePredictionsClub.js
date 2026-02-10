import { useContext } from "react";
import { PredictionsClubContext } from "../context/PredictionsClubContext";

export function usePredictionsClub() {
  const context = useContext(PredictionsClubContext);
  if (!context) throw new Error("usePredictionsClub must be used inside PredictionClubProvider");

  const {
    clubPredictions,
    loading,
    refreshClubPredictions
  } = context;

  return {
    clubPredictions,
    loading,
    refreshClubPredictions
  };
}
