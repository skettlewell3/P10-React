import { useEffect } from "react";
import { useSearchAnyStatsHighs } from "../../hooks/useSearchAnyStatsHighs";
import { SeasonHighsGrid } from "../Stats/SeasonHighsGrid"

export function ModalHighsContainer({ subjectType, subjectId }) {

  const {
    statsById,
    loading,
    fetchStats
  } = useSearchAnyStatsHighs(subjectId, subjectType);

  useEffect(() => {
    if (!subjectId) return;

    if (!statsById[subjectId]) {
      fetchStats(subjectId);
    }
  }, [subjectId, statsById, fetchStats]);

  const statsArray = statsById[subjectId];
  const stats = statsArray?.[0];

  if (loading) return <p>Loading Highs...</p>;
  if (!stats) return <p>Highs Unavailable</p>;

  return (
    <div className="statsSection modalSection statsSection">
      <div className="statsSectionTitle text-right">BEST PERFORMING GWs</div>
        <SeasonHighsGrid stats={stats}/>
    </div>
  );
}