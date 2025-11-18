import { FixturesProvider } from './FixturesProvider';
import { PredictionsProvider } from './PredictionsProvider';
import { LeaderboardsRootProvider } from './LeaderboardsRootProvider';

export function GameDataProvider({ children }) {
    return (
        <FixturesProvider>
            <PredictionsProvider>
                <LeaderboardsRootProvider>
                    {children}
                </LeaderboardsRootProvider>
            </PredictionsProvider>
        </FixturesProvider>
    );
}
