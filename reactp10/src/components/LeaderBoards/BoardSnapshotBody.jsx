import { useLeaderboardsUser } from "../../hooks/useLeaderboardsUser";
import { useLeaderboardsTeam } from "../../hooks/useLeaderboardsTeam";
import { useUser } from "../../hooks/useUser";
import { useUserClubs } from "../../hooks/useUserClubs";
import BoardSnapshotRow from "./BoardSnapshotRow";

export default function BoardSnapshotBody({ gameweek, subjectType }) {
  const { user } = useUser();
  const { clubs, loading: clubsLoading, getDefaultClub } = useUserClubs();

  const activeClub = getDefaultClub();

  const userBoards = useLeaderboardsUser();
  const clubBoards = useLeaderboardsTeam();

  // Guard: wait for user & clubs
  if (!user || (subjectType === "club" && (clubsLoading || !activeClub))) return null;

  const weekly =
    subjectType === "user"
      ? userBoards.weeklyUserLeaderboards?.[gameweek]
      : clubBoards.weeklyTeamLeaderboards?.[gameweek];

  if (!weekly) return null;

  const row =
    subjectType === "user"
      ? weekly.find((e) => e.user_id === user.user_id)
      : weekly.find((e) => e.club_id === activeClub.club_id);

  if (!row) return null;

  const subject = {
    pos: row.rank_position,
    name: row.name,
    p10s: row.perfect_10s,
    rCorrect: row.correct_results,
    gdCorrect: row.correct_goal_differences,
    hCorrect: row.correct_home_goals,
    aCorrect: row.correct_away_goals,
    gCorrect: row.correct_total_goals,
    points: row.total_points,
  };

  return <BoardSnapshotRow subject={subject} />;
}
