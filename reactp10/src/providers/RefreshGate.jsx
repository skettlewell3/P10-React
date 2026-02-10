import { useGameweek } from '../hooks/useGameweeks';
import { useFixtures } from '../hooks/useFixtures';
import { useUserClubs } from '../hooks/useUserClubs';
import { usePredictionsUser } from '../hooks/usePredictionsUser';
import { usePredictionsClub } from '../hooks/usePredictionsClub';
import { useScoringUser } from '../hooks/useScoringUser';
import { useScoringClub } from '../hooks/useScoringClub';
import { useLeaderboardsUser } from '../hooks/useLeaderboardsUser';
import { useLeaderboardsTeam } from '../hooks/useLeaderboardsTeam';
import { useStatsUserLeagueTable } from '../hooks/useStatsUserLeagueTable';
import { useStatsClubLeagueTable } from '../hooks/useStatsClubLeagueTable';
import { useStatsUserSeasonCore } from '../hooks/useStatsUserSeasonCore';
import { useStatsClubSeasonCore } from '../hooks/useStatsClubSeasonCore';


export function RefreshGate({ children }) {
    const gameweek = useGameweek();
    const fixtures = useFixtures();
    const userMemberships = useUserClubs();
    const predictionsUser = usePredictionsUser();
    const predictionsClub = usePredictionsClub();
    const scoringUser = useScoringUser();
    const scoringClub = useScoringClub();
    const leaderboardsUser = useLeaderboardsUser();
    const leaderboardsClub = useLeaderboardsTeam();
    const leagueTableUser = useStatsUserLeagueTable();
    const leagueTableClub = useStatsClubLeagueTable();
    const seasonCoreUser = useStatsUserSeasonCore();
    const seasonCoreClub = useStatsClubSeasonCore();

    const refreshAll = async () => {
        await Promise.all([
            gameweek.refreshGameweek?.(),
            fixtures.refreshFixtures?.(),
            userMemberships.refreshUserMemberships?.(),
            predictionsUser.refreshUserPredictions?.(),
            predictionsClub.refreshClubPredictions?.(),
            scoringUser.refreshUserScoring?.(),
            scoringClub.refreshClubScoring?.(),
            leaderboardsUser.refreshUserLeaderboards?.(),
            leaderboardsClub.refreshTeamLeaderboards?.(),
            leagueTableUser.refreshUserLeagueTable?.(),
            leagueTableClub.refreshClubLeagueTable?.(),
            seasonCoreUser.refreshUserSeasonCoreStats?.(),
            seasonCoreClub.refreshClubSeasonCoreStats?.()
        ]);
    }

    return children({ refreshAll })
}