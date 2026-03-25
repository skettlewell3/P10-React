import { useState, useCallback } from "react";
import { SearchUserFixtureLeaderboardContext } from "../context/SearchUserFixtureLeaderboardContext";
import { useDatabase } from "../hooks/useDatabase";

export function SearchUserFixtureLeaderboardProvider({ children }) {
  const { supabase } = useDatabase();

  const [leaderboardsByFixture, setLeaderboardsByFixture] = useState({});
  const [loadingByFixture, setLoadingByFixture] = useState({});

  const fetchLeaderboard = useCallback(
    async (fixtureId) => {
      if (!fixtureId || !supabase) return;

      setLoadingByFixture(prev => ({ ...prev, [fixtureId]: true }));

      try {
        const { data, error } = await supabase.rpc(
          "get_fixture_user_leaderboard",
          { p_fixture_id: fixtureId }
        );

        if (error) throw error;

        const newLastUpdated = data?.[0]?.last_updated || null;

        setLeaderboardsByFixture(prev => {
          const existing = prev[fixtureId];
          if (existing && existing.lastUpdated === newLastUpdated) {
            return prev;
          }

          return {
            ...prev,
            [fixtureId]: {
              data: data ?? [],
              lastUpdated: newLastUpdated
            }
          };
        });
      } catch (err) {
        console.error("USER FIXTURE LEADERBOARD ERROR:", err.message);
      } finally {
        setLoadingByFixture(prev => ({ ...prev, [fixtureId]: false }));
      }
    },
    [supabase]
  );

  return (
    <SearchUserFixtureLeaderboardContext.Provider
      value={{
        leaderboardsByFixture,
        loadingByFixture,
        fetchLeaderboard
      }}
    >
      {children}
    </SearchUserFixtureLeaderboardContext.Provider>
  );
}