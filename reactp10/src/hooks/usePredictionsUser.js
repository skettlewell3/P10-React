import { useContext } from "react";
import { PredictionsUserContext } from "../context/PredictionsUserContext";

export function usePredictionsUser() {
  const context = useContext(PredictionsUserContext);
  if (!context) throw new Error("usePredictionsUser must be used inside PredictionUserProvider");

  const {
    userPredictions,
    loading,
    refreshUserPredictions
  } = context;

  return {
    userPredictions,
    loading,
    refreshUserPredictions
  }
}
