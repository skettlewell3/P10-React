import { FixturesProvider } from './FixturesProvider';
import { PredictionsProvider } from './PredictionsProvider';
import { LeaderboardProvider } from './LeaderboardProvider';

export function GameDataProvider({ children }) {
    return (
        <FixturesProvider>
            <PredictionsProvider>
                <LeaderboardProvider>
                    {children}
                </LeaderboardProvider>
            </PredictionsProvider>
        </FixturesProvider>
    );
}
