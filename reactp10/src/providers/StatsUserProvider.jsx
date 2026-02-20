import { StatsUserSeasonCoreProvider } from "./StatsUserSeasonCoreProvider";
import { StatsUserLeagueTableProvider } from "./StatsUserLeagueTableProvider";
import { StatsUserSeasonHighsProvider } from "./StatsUserSeasonHighProvider";
import { SearchUserStatsCoreProvider } from "./SearchUserStatsCoreProvider";

export function StatsUserProvider({ children }) {
    return (
        <StatsUserSeasonCoreProvider>
            <SearchUserStatsCoreProvider>
                <StatsUserSeasonHighsProvider>
                    <StatsUserLeagueTableProvider>
                        {children}
                    </StatsUserLeagueTableProvider>
                </StatsUserSeasonHighsProvider>
            </SearchUserStatsCoreProvider>
        </StatsUserSeasonCoreProvider>
    )
}