import { StatsUserProvider } from "./StatsUserProvider";

export function StatsRootProvider({ children }) {
    return (
        <StatsUserProvider>
            {children}
        </StatsUserProvider>
    )
}