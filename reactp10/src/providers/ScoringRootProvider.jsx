import { ScoringClubProvider } from "./ScoringClubProvider"
import { ScoringUserProvider } from "./ScoringUserProvider";

export function ScoringRootProvider({ userId, children }) {

    return (
        <ScoringUserProvider userId={userId}>
            <ScoringClubProvider userId={userId}>
                {children}
            </ScoringClubProvider>
        </ScoringUserProvider>
    );
}