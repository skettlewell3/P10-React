import { HoFClubProvider } from "./HoFClubProvider";
import { HoFProvider } from "./HoFProvider";


export function HoFRootProvider({ children }) {

    return (
        <HoFProvider>
            <HoFClubProvider>
                {children}
            </HoFClubProvider>
        </HoFProvider>                    
    );
}