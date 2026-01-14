import { GameweekProvider } from './GameweekProvider';
import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { ScoringRootProvider } from './ScoringRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';
import { StatsRootProvider } from './StatsRootProvider';
import { UserClubsProvider } from './UserClubsProvider';


export function GameDataProvider({ userId, children }) {
    return (
        <GameweekProvider>
            <FixturesProvider>
                <UserClubsProvider>
                    <PredictionRootProvider userId={userId}>
                        <ScoringRootProvider userId={userId}>
                            <StatsRootProvider>
                                <LeaderboardsRootProvider>
                                    {children}
                                </LeaderboardsRootProvider>
                            </StatsRootProvider>
                        </ScoringRootProvider>
                    </PredictionRootProvider>
                </UserClubsProvider>
            </FixturesProvider>
        </GameweekProvider>
    );
}
