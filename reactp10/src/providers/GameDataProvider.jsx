import { FixturesProvider } from './FixturesProvider';
import { PredictionsProvider } from './PredictionsProvider';
import { LeaderboardsProvider } from './LeaderboardsProvider';

export function GameDataProvider({ children }) {
    return (
        <FixturesProvider>
            <PredictionsProvider>
                <LeaderboardsProvider>
                    {children}
                </LeaderboardsProvider>
            </PredictionsProvider>
        </FixturesProvider>
    );
}
