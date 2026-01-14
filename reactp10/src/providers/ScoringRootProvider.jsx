import { ScoringClubProvider } from "./ScoringClubProvider"
import { ScoringUserProvider } from "./ScoringUserProvider";

export function ScoringRootProvider({ children }) {

    return (
        <ScoringUserProvider>
            <ScoringClubProvider>
                {children}
            </ScoringClubProvider>
        </ScoringUserProvider>
    );
}