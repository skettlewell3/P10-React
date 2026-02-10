import { useContext } from "react";
import { StatsClubLeagueTableContext } from "../context/StatsClubLeagueTableContext";

export function useStatsClubLeagueTable() {
    const context = useContext(StatsClubLeagueTableContext);
    if (!context) throw new Error("useStatsClubLeagueTable must be used inside StatsClubLeagueTableProvider");

    const {
        clubStatsLeagueTable,
        loading,
        refreshClubLeagueTable
    } = context;

    return {
        clubStatsLeagueTable,
        loading,
        refreshClubLeagueTable
    }
}