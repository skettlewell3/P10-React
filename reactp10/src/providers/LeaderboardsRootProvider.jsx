import { LeaderboardsUserProvider } from "./LeaderboardsUserProvider";
import { LeaderboardsTeamProvider } from "./LeaderboardsTeamProvider";

export function LeaderboardsRootProvider({ children }) {
  return (
    <LeaderboardsUserProvider>
      <LeaderboardsTeamProvider>
        {children}
      </LeaderboardsTeamProvider>
    </LeaderboardsUserProvider>
  );
}