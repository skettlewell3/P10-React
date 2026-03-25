import { useContext } from "react";
import { SearchClubFixtureLeaderboardContext } from "../context/SearchClubFixtureLeaderboardContext";

export function useClubFixtureLeaderboard() {
  const context = useContext(SearchClubFixtureLeaderboardContext);

  if (!context) {
    throw new Error("useClubFixtureLeaderboard must be used within its provider");
  }

  return context;
}