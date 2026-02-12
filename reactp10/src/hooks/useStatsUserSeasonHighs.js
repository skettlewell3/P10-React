import { useContext } from "react";
import { StatsUserSeasonHighsContext } from "../context/StatsUserSeasonHighsContext";

export function useStatsUserSeasonHighs() {
    const context = useContext(StatsUserSeasonHighsContext);

    if (!context) {
        throw new Error(
            "useStatsUserSeasonHighs must be used inside StatsUserSeasonHighsProvider"
        );
    }

    const {
        userSeasonHighs,
        loading,
        refreshUserSeasonHighs,
    } = context

    return {
        stats: userSeasonHighs,
        loading, 
        refreshUserSeasonHighs,
    };
}
