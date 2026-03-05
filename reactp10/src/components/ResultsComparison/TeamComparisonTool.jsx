import { useState, useEffect } from "react";
import { useSearchTeamComparison } from "../../hooks/useSearchTeamComparison";
import TeamComparisonCore from "./TeamComparisonCore";
import TeamComparisonSelector from "./TeamComparisonSelector";

export default function TeamComparisonTool({ teamsFromFixture }) {
  const { fetchTeamComparison, comparisons, loading } = useSearchTeamComparison();
  const [currentData, setCurrentData] = useState(null);
  const [teams, setTeams] = useState(teamsFromFixture || { team1: null, team2: null });

  // Trigger fetch when teams are set
  useEffect(() => {
    if (!teams.team1 || !teams.team2) return;

    const key = `${teams.team1}-${teams.team2}`;
    if (comparisons[key]) {
      setCurrentData(comparisons[key]);
    } else {
      fetchTeamComparison(teams.team1, teams.team2).then((data) => setCurrentData(data));
    }
  }, [teams, comparisons, fetchTeamComparison]);

  const handleCompareTeams = (team1, team2) => {
    setTeams({ team1, team2 });
  };

  return (
    <div className="teamComparisonContainer">
        <div className="statsSectionTitle text-right">COMPARE RESULTS...</div>
      {!teamsFromFixture && <TeamComparisonSelector onSelect={handleCompareTeams} />}
      {loading && <p>Loading...</p>}
      {currentData && <TeamComparisonCore data={currentData} />}
    </div>
  );
}