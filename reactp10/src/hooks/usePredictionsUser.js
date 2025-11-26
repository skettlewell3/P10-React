import { useContext } from "react";
import { PredictionsUserContext } from "../context/PredictionsUserContext";

export function usePredictionsUser() {
  const ctx = useContext(PredictionsUserContext);
  if (!ctx) throw new Error("usePredictionsUser must be used inside PredictionUserProvider");

  return {
    userPredictions: ctx.userPredictions,
    loading: ctx.loading
  };
}
