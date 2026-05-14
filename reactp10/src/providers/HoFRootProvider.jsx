import { HoFClubProvider } from "./HoFClubProvider";
import { HoFProvider } from "./HoFProvider";
import { HoFSeasonClubProvider } from "./HoFSeasonClubProvider";
import { HoFSeasonUserProvider } from "./HoFSeasonUserProvider";


export function HoFRootProvider({ children }) {

    return (
        <HoFProvider>
            <HoFSeasonUserProvider>
                <HoFClubProvider>
                    <HoFSeasonClubProvider>
                        {children}
                    </HoFSeasonClubProvider>
                </HoFClubProvider>
            </HoFSeasonUserProvider>
        </HoFProvider>                    
    );
}