import { PredictionClubProvider } from "./PredictionClubProvider"
import { PredictionUserProvider } from "./PredictionUserProvider"
import { SearchClubPredictionsWeekProvider } from "./SearchClubPredictionsWeekProvider";
import { SearchUserPredictionsWeekProvider } from "./SearchUserPredictionsWeekProvider";

export function PredictionRootProvider({ children }) {

    return (
        <PredictionUserProvider>
            <SearchUserPredictionsWeekProvider>
                <PredictionClubProvider>
                    <SearchClubPredictionsWeekProvider>
                        {children}
                    </SearchClubPredictionsWeekProvider>
                </PredictionClubProvider>
            </SearchUserPredictionsWeekProvider>
        </PredictionUserProvider>
    );
}