import { GameweekProvider } from './GameweekProvider';
import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { ScoringRootProvider } from './ScoringRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';
import { StatsRootProvider } from './StatsRootProvider';
import { UserClubsProvider } from './UserClubsProvider';
import { RefreshGate } from './RefreshGate';

export function GameDataProvider({ children }) {
    return (
        <GameweekProvider>
            <FixturesProvider>
                <UserClubsProvider>
                    <PredictionRootProvider>
                        <ScoringRootProvider>
                            <StatsRootProvider>
                                <LeaderboardsRootProvider>
                                    <RefreshGate>
                                        {({ refreshAll }) => children({ refreshAll })}
                                    </RefreshGate>
                                </LeaderboardsRootProvider>
                            </StatsRootProvider>
                        </ScoringRootProvider>
                    </PredictionRootProvider>
                </UserClubsProvider>
            </FixturesProvider>
        </GameweekProvider>
    );
}


