import { StatsClubLeagueTableProvider } from "../providers/StatsClubLeagueTableProvider";

export function StatsClubProvider({ children }) {
    return (
        <StatsClubLeagueTableProvider>
            {children}
        </StatsClubLeagueTableProvider>
        
    )
}