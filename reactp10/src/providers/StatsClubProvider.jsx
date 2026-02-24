import { StatsClubLeagueTableProvider } from "../providers/StatsClubLeagueTableProvider";
import { StatsClubSeasonCoreProvider } from "../providers/StatsClubSeasonCoreProvider";
import { SearchClubStatsCoreProvider } from "./SearchClubStatsCoreProvider";
import { SearchClubStatsHighsProvider } from "./SearchClubStatsHighsProvider";
import { SearchClubStatsPLTProvider } from "./SearchClubStatsPLTProvider";
import { StatsClubSeasonHighsProvider } from "./StatsClubSeasonHighsProvider";

export function StatsClubProvider({ children }) {
    return (
        <StatsClubSeasonCoreProvider>
            <SearchClubStatsCoreProvider>
                <StatsClubSeasonHighsProvider>
                    <SearchClubStatsHighsProvider>
                        <StatsClubLeagueTableProvider>
                            <SearchClubStatsPLTProvider>
                                {children}
                            </SearchClubStatsPLTProvider>
                        </StatsClubLeagueTableProvider>
                    </SearchClubStatsHighsProvider>
                </StatsClubSeasonHighsProvider>
            </SearchClubStatsCoreProvider>
        </StatsClubSeasonCoreProvider>        
    )
}