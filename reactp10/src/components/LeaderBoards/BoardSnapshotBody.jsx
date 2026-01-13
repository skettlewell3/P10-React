import { useLeaderboardsUser } from "../../hooks/useLeaderboardsUser";
import { useLeaderboardsTeam } from "../../hooks/useLeaderboardsTeam";
import { useUser } from '../../hooks/useUser';
import BoardSnapshotRow from "./BoardSnapshotRow";

export default function BoardSnapshotBody({ gameweek, subjectType }) {
    const { user } = useUser();
    const userBoards = useLeaderboardsUser();
    const clubBoards = useLeaderboardsTeam();

    if (!user) return null;

    const weekly = 
        subjectType === "user"
        ? userBoards.weeklyUserLeaderboards?.[gameweek]
        : clubBoards.weeklyTeamLEaderboards?.[gameweek]
    ;

    if (!weekly) return null;

    const row = 
        subjectType === "user"
        ? weekly.find(e => e.user_id === user.user_id)
        : weekly.find(e => e.club_id === user.club_id)
    ;

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

    return <BoardSnapshotRow subject={subject} />
}