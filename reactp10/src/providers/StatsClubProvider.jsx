import { StatsClubLeagueTableProvider } from "../providers/StatsClubLeagueTableProvider";
import { StatsClubSeasonCoreProvider } from "../providers/StatsClubSeasonCoreProvider";
import { SearchClubStatsCoreProvider } from "./SearchClubStatsCoreProvider";
import { StatsClubSeasonHighsProvider } from "./StatsClubSeasonHighsProvider";

export function StatsClubProvider({ children }) {
    return (
        <StatsClubSeasonCoreProvider>
            <SearchClubStatsCoreProvider>
                <StatsClubSeasonHighsProvider>
                    <StatsClubLeagueTableProvider>
                        {children}
                    </StatsClubLeagueTableProvider>
                </StatsClubSeasonHighsProvider>
            </SearchClubStatsCoreProvider>
        </StatsClubSeasonCoreProvider>        
    )
}