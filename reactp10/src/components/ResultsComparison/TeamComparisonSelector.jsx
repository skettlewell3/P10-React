import { useState } from "react";
import { useSearchTeamComparison } from "../../hooks/useSearchTeamComparison";

// Optional: later you can import teams from context instead of hardcoding
const TEAM_OPTIONS = [
  { id: 1, name: "Arsenal" },
  { id: 2, name: "Villa" },
  { id: 12, name: "City" },
];

export default function TeamComparisonSelector({ onSelect }) {
  const { fetchTeamComparison, loading } = useSearchTeamComparison();
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const handleSearch = () => {
    if (!team1 || !team2) return;
    // trigger fetch from provider
    fetchTeamComparison(Number(team1), Number(team2));
    if (onSelect) onSelect(Number(team1), Number(team2));
  };

  return (
    <div className="teamComparisonSelector">

      <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
        <option value="">Select Team 1</option>
        {TEAM_OPTIONS.filter(t => t.id !== Number(team2)).map(t => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>

      <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
        <option value="">Select Team 2</option>
        {TEAM_OPTIONS.filter(t => t.id !== Number(team1)).map(t => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>

      <button onClick={handleSearch} disabled={loading || !team1 || !team2}>
        Compare
      </button>

    </div>
  );
}