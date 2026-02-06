import { useFixtures } from '../hooks/useFixtures';
import { usePredictionsUser } from '../hooks/usePredictionsUser';
import { usePredictionsClub } from '../hooks/usePredictionsClub';
import { useScoringUser } from '../hooks/useScoringUser';
import { useScoringClub } from '../hooks/useScoringClub';
import { useLeaderboardsUser } from '../hooks/useLeaderboardsUser';
import { useLeaderboardsTeam } from '../hooks/useLeaderboardsTeam';
import { useStatsUserLeagueTable } from '../hooks/useStatsUserLeagueTable';
import { useStatsClubLeagueTable } from '../hooks/useStatsClubLeagueTable';

export function RefreshGate({ children }) {
    const fixtures = useFixtures();
    const predictionsUser = usePredictionsUser();
    const predictionsClub = usePredictionsClub();
    const scoringUser = useScoringUser();
    const scoringClub = useScoringClub();
    const leaderboardsUser = useLeaderboardsUser();
    const leaderboardsClub = useLeaderboardsTeam();
    const leagueTableUser = useStatsUserLeagueTable();
    const leagueTableClub = useStatsClubLeagueTable();

    const refreshAll = async () => {
        await Promise.all([
            fixtures.fetchFixtures?.(),
            predictionsUser.refresh?.(),
            predictionsClub.refresh?.(),
            scoringUser.refresh?.(),
            scoringClub.refresh?.(),
            leaderboardsUser.refresh?.(),
            leaderboardsClub.refresh?.(),
            leagueTableUser.fetchUserLeagueTable?.(),
            leagueTableClub.fetchClubLeagueTable?.(),
        ]);
    }

    return children({ refreshAll })
}