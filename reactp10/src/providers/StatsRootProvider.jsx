import { StatsClubProvider } from "./StatsClubProvider";
import { StatsUserProvider } from "./StatsUserProvider";

export function StatsRootProvider({ children }) {
    return (
        <StatsUserProvider>
            <StatsClubProvider>
             {children}
            </StatsClubProvider>
        </StatsUserProvider>
    )
}