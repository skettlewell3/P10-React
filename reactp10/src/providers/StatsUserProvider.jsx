import { StatsUserLeagueTableProvider } from "./StatsUserLeagueTableProvider";

export function StatsUserProvider({ children }) {
    return (
        <StatsUserLeagueTableProvider>
            {children}
        </StatsUserLeagueTableProvider>
    )
}