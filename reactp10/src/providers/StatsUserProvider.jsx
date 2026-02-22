import { StatsUserSeasonCoreProvider } from "./StatsUserSeasonCoreProvider";
import { StatsUserLeagueTableProvider } from "./StatsUserLeagueTableProvider";
import { StatsUserSeasonHighsProvider } from "./StatsUserSeasonHighProvider";
import { SearchUserStatsCoreProvider } from "./SearchUserStatsCoreProvider";
import { SearchUserStatsHighsProvider } from "./SearchUserStatsHighsProvider";

export function StatsUserProvider({ children }) {
    return (
        <StatsUserSeasonCoreProvider>
            <SearchUserStatsCoreProvider>
                <StatsUserSeasonHighsProvider>
                    <SearchUserStatsHighsProvider>
                        <StatsUserLeagueTableProvider>
                            {children}
                        </StatsUserLeagueTableProvider>
                    </SearchUserStatsHighsProvider>
                </StatsUserSeasonHighsProvider>
            </SearchUserStatsCoreProvider>
        </StatsUserSeasonCoreProvider>
    )
}