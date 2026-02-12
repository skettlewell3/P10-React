import { useStatsClubSeasonHighs } from "../../hooks/useStatsClubSeasonHighs";
import { useStatsUserSeasonHighs } from "../../hooks/useStatsUserSeasonHighs";
import { SeasonHighsGrid } from "./SeasonHighsGrid";

export function SeasonHighsContainer({ subjectType, highlightedClub }) {
    const userStats = useStatsUserSeasonHighs();
    const clubStats = useStatsClubSeasonHighs();

    const active = subjectType === "user" ? userStats : clubStats;
    const { stats, loading } = active;

    if (loading) return <p>Loading Stats...</p>;
    if (!stats) return <p>Stats unavailable.</p>;

    const selectedStats =
        subjectType === "club"
            ? stats?.find(c => c.club_id === highlightedClub)
            : stats?.[0]
    ;

    if (!selectedStats) return <p>Season Highs not available </p>;

    return (
        <div className="seasonHighsContainer statsSection">
            <div className="statsSectionTitle text-right">BEST PERFORMING GWs</div>
            <SeasonHighsGrid stats={selectedStats} />
        </div>
    )

}