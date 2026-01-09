import { useContext } from "react";
import { StatsUserLeagueTableContext } from "../context/StatsUserLeagueTableContext";

export function useStatsUserLeagueTable() {
    const ctx = useContext(StatsUserLeagueTableContext);
    if (!ctx) throw new Error("useStatsUserLeagueTable must be used inside StatsUserLeagueTableProvider");

    return ctx;
}