import { PremDataLeagueTableProvider } from "./PremDataLeagueTableProvider";


export function PremDataRootProvider({ children }) {
    return (
        <PremDataLeagueTableProvider>
            {children}
        </PremDataLeagueTableProvider>      
    )
}