import { LeaderboardsUserProvider } from "./LeaderboardsUserProvider";
import { LeaderboardsTeamProvider } from "./LeaderboardsTeamProvider";
import { SearchUserFixtureLeaderboardProvider } from "./SearchUserFixtureLeaderboardProvider";
import { SearchClubFixtureLeaderboardProvider } from "./SearchClubFixtureLeaderboardProvider";

export function LeaderboardsRootProvider({ children }) {
  return (
    <LeaderboardsUserProvider>
      <SearchUserFixtureLeaderboardProvider>        
          <LeaderboardsTeamProvider>
            <SearchClubFixtureLeaderboardProvider>
              {children}
            </SearchClubFixtureLeaderboardProvider>
          </LeaderboardsTeamProvider>
      </SearchUserFixtureLeaderboardProvider>
    </LeaderboardsUserProvider>
  );
}