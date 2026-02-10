import { useContext } from "react";
import { StatsUserLeagueTableContext } from "../context/StatsUserLeagueTableContext";

export function useStatsUserLeagueTable() {
    const context = useContext(StatsUserLeagueTableContext);
    if (!context) throw new Error("useStatsUserLeagueTable must be used inside StatsUserLeagueTableProvider");

    const {
        userStatsLeagueTable,
        loading,
        refreshUserLeagueTable
    } = context;

    return {
        userStatsLeagueTable,
        loading,
        refreshUserLeagueTable
    }
}