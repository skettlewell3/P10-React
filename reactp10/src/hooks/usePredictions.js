import { usePredictionsUser } from "./usePredictionsUser";
import { usePredictionsClub } from "./usePredictionsClub";

export function usePredictions(subjectType) {
  const user = usePredictionsUser();
  const club = usePredictionsClub();

  return subjectType === "user"
    ? { data: user.userPredictions, loading: user.loading, refresh: user.refresh }
    : { data: club.clubPredictions, loading: club.loading, refresh: club.refresh};
}
