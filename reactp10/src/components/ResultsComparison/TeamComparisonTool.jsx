import { useState, useEffect } from "react";
import { useSearchTeamComparison } from "../../hooks/useSearchTeamComparison";
import TeamComparisonCore from "./TeamComparisonCore";
import TeamComparisonSelector from "./TeamComparisonSelector";

export default function TeamComparisonTool({ teamsFromFixture }) {
  const { fetchTeamComparison, comparisons, loading } = useSearchTeamComparison();

  const [currentData, setCurrentData] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState(null);

  // Single source of truth
  const activeTeams = teamsFromFixture || selectedTeams;

  // Reset data when teams change
  useEffect(() => {
    setCurrentData(null);
  }, [activeTeams]);

  // Fetch / load cached data
  useEffect(() => {
    if (!activeTeams?.team1 || !activeTeams?.team2) return;

    const key = `${activeTeams.team1}-${activeTeams.team2}`;

    if (comparisons[key]) {
      setCurrentData(comparisons[key]);
    } else {
      fetchTeamComparison(
        activeTeams.team1,
        activeTeams.team2
      ).then((data) => setCurrentData(data));
    }
  }, [activeTeams, comparisons, fetchTeamComparison]);

  const handleCompareTeams = (team1, team2) => {
    setSelectedTeams({ team1, team2 });
  };

  return (
    <div className="teamComparisonContainer statsSection">
      <div className="statsSectionTitle text-right">
        COMPARE RESULTS...
      </div>

      {/* Only show selector if not controlled by parent */}
      {!teamsFromFixture && (
        <TeamComparisonSelector onSelect={handleCompareTeams} />
      )}

      {loading && <p>Loading...</p>}

      {currentData && (
        <TeamComparisonCore
          data={currentData}
          teams={activeTeams}
        />
      )}
    </div>
  );
}