import { StatsUserSeasonCoreProvider } from "./StatsUserSeasonCoreProvider";
import { StatsUserLeagueTableProvider } from "./StatsUserLeagueTableProvider";
import { StatsUserSeasonHighsProvider } from "./StatsUserSeasonHighProvider";

export function StatsUserProvider({ children }) {
    return (
        <StatsUserSeasonCoreProvider>
            <StatsUserSeasonHighsProvider>
                <StatsUserLeagueTableProvider>
                    {children}
                </StatsUserLeagueTableProvider>
            </StatsUserSeasonHighsProvider>
        </StatsUserSeasonCoreProvider>
    )
}