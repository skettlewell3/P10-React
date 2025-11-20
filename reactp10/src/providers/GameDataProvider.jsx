import { FixturesProvider } from './FixturesProvider';
import { PredictionRootProvider } from './PredictionRootProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';

export function GameDataProvider({ children }) {
    return (
        <FixturesProvider>
            <PredictionRootProvider>
                <LeaderboardsRootProvider>
                    {children}
                </LeaderboardsRootProvider>
            </PredictionRootProvider>
        </FixturesProvider>
    );
}
