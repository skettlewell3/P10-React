import { GameweekProvider } from './GameweekProvider';
import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';

export function GameDataProvider({ userId, children }) {
    return (
        <GameweekProvider>
            <FixturesProvider>
                <PredictionRootProvider userId={userId}>
                    <LeaderboardsRootProvider>
                        {children}
                    </LeaderboardsRootProvider>
                </PredictionRootProvider>
            </FixturesProvider>
        </GameweekProvider>
    );
}
