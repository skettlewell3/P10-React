import { useContext } from "react";
import { SearchUserFixtureLeaderboardContext } from "../context/SearchUserFixtureLeaderboardContext";

export function useUserFixtureLeaderboard() {
  const context = useContext(SearchUserFixtureLeaderboardContext);

  if (!context) {
    throw new Error("useUserFixtureLeaderboard must be used within its provider");
  }

  return context;
}