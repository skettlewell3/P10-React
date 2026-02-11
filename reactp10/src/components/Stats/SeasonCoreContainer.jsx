import { useStatsClubSeasonCore } from "../../hooks/useStatsClubSeasonCore";
import { useStatsUserSeasonCore } from "../../hooks/useStatsUserSeasonCore";
import { SeasonCoreGrid } from "./SeasonCoreGrid";

export function SeasonCoreContainer({ subjectType, highlightedClub }) {
    const userStats = useStatsUserSeasonCore();
    const clubStats = useStatsClubSeasonCore();

    const active = subjectType === "user" ? userStats : clubStats;

    const { stats, loading } = active;

    if (loading) return <p>Loading Stats...</p>;
    if (!stats) return <p>Stats unavailable..</p>;

    const selectedStats =
        subjectType === "club"
            ? stats?.find(c => c.club_id === highlightedClub)
            : stats;

    if (!selectedStats) return <p>No club stats found..</p>;

    return (
        <div className="seasonCoreContainer statsSection">
            <h2 className="statsSectionTitle">Season Performance</h2>
            <SeasonCoreGrid stats={selectedStats} />
        </div>
    );
}
