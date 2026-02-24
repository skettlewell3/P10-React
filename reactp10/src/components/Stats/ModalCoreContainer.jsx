import { useEffect } from "react";
import { useSearchUserStatsCore } from "../../hooks/useSearchUserStatsCore";
import { useSearchClubStatsCore } from "../../hooks/useSearchClubStatsCore";
import { SeasonCoreGrid } from "./SeasonCoreGrid";

export function ModalCoreContainer({ subjectType, subjectId }) {
  const {
    stats: userStatsById,
    loading: userLoading,
    fetchUserSeasonCoreStats,
  } = useSearchUserStatsCore();

  const {
    stats: clubStatsById,
    loading: clubLoading,
    fetchClubSeasonCoreStats,
  } = useSearchClubStatsCore();

  // Trigger fetch when the subjectId changes
  useEffect(() => {
    if (!subjectId) return;

    if (subjectType === "user") {
      // only fetch if we don't have cached data
      if (!userStatsById[subjectId]) fetchUserSeasonCoreStats(subjectId);
    } else {
      if (!clubStatsById[subjectId]) fetchClubSeasonCoreStats(subjectId);
    }
  }, [
    subjectId,
    subjectType,
    fetchUserSeasonCoreStats,
    fetchClubSeasonCoreStats,
    userStatsById,
    clubStatsById,
  ]);

  const loading = subjectType === "user" ? userLoading : clubLoading;
  const statsArray =
    subjectType === "user"
      ? userStatsById[subjectId]
      : clubStatsById[subjectId]
  ;

  const stats = statsArray?.[0];

  if (loading) return <p>Loading Stats...</p>;
  if (!statsArray) {
    return <p>Loading Stats...</p>;
  }
  
  console.log("userstats by id", userStatsById)
  console.log("clubstats by id", clubStatsById)

  return (
    <div className="seasonCoreContainer statsSection modalSection">
      <div className="statsSectionTitle">SEASON STATISTICS</div>
        <SeasonCoreGrid stats={stats} />
    </div>
  );
}
