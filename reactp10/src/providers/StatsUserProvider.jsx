import { StatsUserSeasonCoreProvider } from "./StatsUserSeasonCoreProvider";
import { StatsUserLeagueTableProvider } from "./StatsUserLeagueTableProvider";
import { StatsUserSeasonHighsProvider } from "./StatsUserSeasonHighProvider";
import { SearchUserStatsCoreProvider } from "./SearchUserStatsCoreProvider";
import { SearchUserStatsHighsProvider } from "./SearchUserStatsHighsProvider";
import { SearchUserStatsPLTProvider } from "./SearchUserStatsPLTProvider";

export function StatsUserProvider({ children }) {
    return (
        <StatsUserSeasonCoreProvider>
            <SearchUserStatsCoreProvider>
                <StatsUserSeasonHighsProvider>
                    <SearchUserStatsHighsProvider>
                        <StatsUserLeagueTableProvider>
                            <SearchUserStatsPLTProvider>
                                {children}
                            </SearchUserStatsPLTProvider>
                        </StatsUserLeagueTableProvider>
                    </SearchUserStatsHighsProvider>
                </StatsUserSeasonHighsProvider>
            </SearchUserStatsCoreProvider>
        </StatsUserSeasonCoreProvider>
    )
}