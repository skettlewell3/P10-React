import { GameweekProvider } from './GameweekProvider';
import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { ScoringRootProvider } from './ScoringRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';


export function GameDataProvider({ userId, children }) {
    return (
        <GameweekProvider>
            <FixturesProvider>
                <PredictionRootProvider userId={userId}>
                    <ScoringRootProvider userId={userId}>
                        <LeaderboardsRootProvider>
                            {children}
                        </LeaderboardsRootProvider>
                    </ScoringRootProvider>
                </PredictionRootProvider>
            </FixturesProvider>
        </GameweekProvider>
    );
}
