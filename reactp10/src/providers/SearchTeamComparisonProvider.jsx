import { useState, useEffect, useCallback } from "react";
import { SearchTeamComparisonContext } from "../context/SearchTeamComparisonContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchTeamComparisonProvider({ children }) {
  const { supabase } = useDatabase();

  const [comparisons, setComparisons] = useState({});
  const [teams, setTeams] = useState({ team1: null, team2: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeamComparison = useCallback(
    async (team1Id, team2Id) => {
      if (!team1Id || !team2Id || !supabase) return;

      const key = [team1Id, team2Id].sort().join("-");

      // Return cached result if available
      if (comparisons[key]) {
        setTeams({ team1: team1Id, team2: team2Id });
        return comparisons[key];
      }

      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase.rpc("get_team_results_comparison", {
          p_team_1_id: team1Id,
          p_team_2_id: team2Id,
        });

        if (error) throw error;

        setComparisons((prev) => ({
          ...prev,
          [key]: data || [],
        }));

        setTeams({ team1: team1Id, team2: team2Id });
      } catch (err) {
        console.error("Team comparison fetch failed:", err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [supabase, comparisons]
  );

  // Optional: if you want to prefetch something on mount or refresh, you can do it here:
  // useEffect(() => {
  //   if (teams.team1 && teams.team2) {
  //     fetchTeamComparison(teams.team1, teams.team2);
  //   }
  // }, [fetchTeamComparison, teams.team1, teams.team2]);
  // note: look into favoured teams and preloading team 1 as fave team. 

  const value = {
    comparisons,
    teams,
    loading,
    error,
    fetchTeamComparison,
  };

  return (
    <SearchTeamComparisonContext.Provider value={value}>
      {children}
    </SearchTeamComparisonContext.Provider>
  );
}