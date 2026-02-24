import { useContext, useCallback } from "react";
import { SearchUserPredictionsWeekContext } from "../context/SearchUserPredictionsWeekContext";
import { SearchClubPredictionsWeekContext } from "../context/SearchClubPredictionsWeekContext";

export function useSearchAnyPredictionsWeek({ subjectId, subjectType, gameweek }) {
  const userContext = useContext(SearchUserPredictionsWeekContext);
  const clubContext = useContext(SearchClubPredictionsWeekContext);

  if (!userContext || !clubContext) {
    throw new Error(
      "useSearchAnyPredictionsWeek must be used inside both User and Club providers"
    );
  }

  const { predictionsByKey: userPredictionsByKey, loadingByKey: userLoadingByKey, fetchPredictions: fetchUser } = userContext;
  const { predictionsByKey: clubPredictionsByKey, loadingByKey: clubLoadingByKey, fetchPredictions: fetchClub } = clubContext;

  // key is only valid if subjectId and gameweek exist
  const key = subjectId && gameweek ? `${subjectId}-${gameweek}` : null;

  // undefined = never fetched yet; [] = fetched but empty
  const predictions = key
    ? subjectType === "club"
      ? clubPredictionsByKey[key]
      : userPredictionsByKey[key]
    : undefined;

  const loading = key
    ? subjectType === "club"
      ? clubLoadingByKey[key] ?? false
      : userLoadingByKey[key] ?? false
    : false;

  // stable fetch reference
  const fetchPredictions = useCallback(() => {
    if (!subjectId || !gameweek) return;
    if (subjectType === "club") fetchClub({ clubId: subjectId, gameweek });
    else fetchUser({ userId: subjectId, gameweek });
  }, [subjectId, subjectType, gameweek, fetchUser, fetchClub]);

  return { predictions, loading, fetchPredictions };
}