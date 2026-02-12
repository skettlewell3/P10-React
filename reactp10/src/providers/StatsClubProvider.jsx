import { StatsClubLeagueTableProvider } from "../providers/StatsClubLeagueTableProvider";
import { StatsClubSeasonCoreProvider } from "../providers/StatsClubSeasonCoreProvider";
import { StatsClubSeasonHighsProvider } from "./StatsClubSeasonHighsProvider";

export function StatsClubProvider({ children }) {
    return (
        <StatsClubSeasonCoreProvider>
            <StatsClubSeasonHighsProvider>
                <StatsClubLeagueTableProvider>
                    {children}
                </StatsClubLeagueTableProvider>
            </StatsClubSeasonHighsProvider>
        </StatsClubSeasonCoreProvider>        
    )
}