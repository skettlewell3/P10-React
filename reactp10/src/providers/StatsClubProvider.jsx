import { StatsClubLeagueTableProvider } from "../providers/StatsClubLeagueTableProvider";
import { StatsClubSeasonCoreProvider } from "../providers/StatsClubSeasonCoreProvider";

export function StatsClubProvider({ children }) {
    return (
        <StatsClubSeasonCoreProvider>
            <StatsClubLeagueTableProvider>
                {children}
            </StatsClubLeagueTableProvider>
        </StatsClubSeasonCoreProvider>        
    )
}