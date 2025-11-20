import { PredictionClubProvider } from "./PredictionClubProvider"
import { PredictionUserProvider } from "./PredictionUserProvider"

export function PredictionRootProvider({ userId, children }) {

    return (
        <PredictionUserProvider userId={userId}>
            <PredictionClubProvider userId={userId}>
                {children}
            </PredictionClubProvider>
        </PredictionUserProvider>
    );
}