import { StatsUserSeasonCoreProvider } from "./StatsUserSeasonCoreProvider";
import { StatsUserLeagueTableProvider } from "./StatsUserLeagueTableProvider";

export function StatsUserProvider({ children }) {
    return (
        <StatsUserSeasonCoreProvider>
            <StatsUserLeagueTableProvider>
                {children}
            </StatsUserLeagueTableProvider>
        </StatsUserSeasonCoreProvider>
    )
}