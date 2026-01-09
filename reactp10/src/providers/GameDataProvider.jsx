import { GameweekProvider } from './GameweekProvider';
import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { ScoringRootProvider } from './ScoringRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';
import { StatsRootProvider } from './StatsRootProvider';


export function GameDataProvider({ userId, children }) {
    return (
        <GameweekProvider>
            <FixturesProvider>
                <PredictionRootProvider userId={userId}>
                    <ScoringRootProvider userId={userId}>
                        <StatsRootProvider userId={userId}>
                            <LeaderboardsRootProvider>
                                {children}
                            </LeaderboardsRootProvider>
                        </StatsRootProvider>
                    </ScoringRootProvider>
                </PredictionRootProvider>
            </FixturesProvider>
        </GameweekProvider>
    );
}
