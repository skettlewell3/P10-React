import { PredictionClubProvider } from "./PredictionClubProvider"
import { PredictionUserProvider } from "./PredictionUserProvider"

export function PredictionRootProvider({ children }) {

    return (
        <PredictionUserProvider>
            <PredictionClubProvider>
                {children}
            </PredictionClubProvider>
        </PredictionUserProvider>
    );
}