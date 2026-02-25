import { GameweekProvider } from './GameweekProvider';
import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { ScoringRootProvider } from './ScoringRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';
import { StatsRootProvider } from './StatsRootProvider';
import { UserClubsProvider } from './UserClubsProvider';
import { PremDataRootProvider } from './PremDataRootProvider';
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
                                    <PremDataRootProvider>
                                        <RefreshGate>
                                            {({ refreshAll }) => children({ refreshAll })}
                                        </RefreshGate>
                                    </PremDataRootProvider>
                                </LeaderboardsRootProvider>
                            </StatsRootProvider>
                        </ScoringRootProvider>
                    </PredictionRootProvider>
                </UserClubsProvider>
            </FixturesProvider>
        </GameweekProvider>
    );
}


