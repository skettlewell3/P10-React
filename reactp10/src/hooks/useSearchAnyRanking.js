import { useContext, useMemo } from 'react';
import { LeaderboardsUserContext } from '../context/LeaderboardsUserContext';
import { LeaderboardsTeamContext } from '../context/LeaderboardsTeamContext';

export function useSearchAnyRanking ({ id, isTeam }) {
  // Hooks always called at the top
  const { overallUserLeaderboard, userLoading } = useContext(LeaderboardsUserContext);
  const { overallTeamLeaderboard, teamLoading } = useContext(LeaderboardsTeamContext);

  // useMemo called unconditionally
  const ranking = useMemo(() => {
    if (isTeam) {
      if (!overallTeamLeaderboard || !id) return null;
      return overallTeamLeaderboard.find(t => t.club_id === id) || null;
    } else {
      if (!overallUserLeaderboard || !id) return null;
      return overallUserLeaderboard.find(u => u.user_id === id) || null;
    }
  }, [overallUserLeaderboard, overallTeamLeaderboard, id, isTeam]);

  const loading = isTeam ? teamLoading : userLoading;

  return {
    ranking,
    loading,
    overallScore: ranking?.total_points || 0,
    overallRanking: ranking?.rank_position || 0,
  };
}