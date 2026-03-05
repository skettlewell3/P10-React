import { PremDataLeagueTableProvider } from "./PremDataLeagueTableProvider";
import { SearchTeamComparisonProvider } from "./SearchTeamComparisonProvider";


export function PremDataRootProvider({ children }) {
    return (
        <PremDataLeagueTableProvider>
            <SearchTeamComparisonProvider>
                {children}
            </SearchTeamComparisonProvider>
        </PremDataLeagueTableProvider>      
    )
}