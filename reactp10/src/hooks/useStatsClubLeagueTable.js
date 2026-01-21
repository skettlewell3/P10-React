import { useContext } from "react";
import { StatsClubLeagueTableContext } from "../context/StatsClubLeagueTableContext";

export function useStatsClubLeagueTable() {
    const ctx = useContext(StatsClubLeagueTableContext);
    if (!ctx) throw new Error("useStatsClubLeagueTable must be used inside StatsClubLeagueTableProvider");

    return ctx;
}