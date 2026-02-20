import { useEffect, useState } from "react";
import { useLeaderboardsTeam } from "../../hooks/useLeaderboardsTeam"
import { useLeaderboardsUser } from "../../hooks/useLeaderboardsUser";
import BoardRowNew from "./BoardRowNew";

export default function BoardBody({ gameweek, activeLens, subjectType, businessData }) {
  const userBoards = useLeaderboardsUser();
  const teamBoards = useLeaderboardsTeam();

  const { weeklyLeaderboards, overallLeaderboard, loading } = 
    subjectType === "user"
     ? {
      weeklyLeaderboards: userBoards.weeklyUserLeaderboards,
      overallLeaderboard: userBoards.overallUserLeaderboard,
      loading: userBoards.loading,
     }
     : {
      weeklyLeaderboards: teamBoards.weeklyTeamLeaderboards,
      overallLeaderboard: teamBoards.overallTeamLeaderboard,
      loading: teamBoards.loading,
     }
  ;

  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    if (loading) return;

    let newData = [];

    if (activeLens === "season") {
      // overall leaderboard
      newData = overallLeaderboard.map((entry) => ({
        key: entry.user_id ?? entry.club_id ?? entry.name, // stable key fallback
        pos: entry.rank_position,
        name: entry.name,
        p10s: entry.perfect_10s,
        rCorrect: entry.correct_results,
        gdCorrect: entry.correct_goal_differences,
        hCorrect: entry.correct_home_goals,
        aCorrect: entry.correct_away_goals,
        gCorrect: entry.correct_total_goals,
        points: entry.total_points,
        id: entry.user_id ?? entry.club_id
      }));
    } else {
      // weekly data (expect weeklyLeaderboards to be an object: { 1: [...], 2: [...] })
      const weekData = weeklyLeaderboards?.[gameweek] || [];
      newData = weekData.map((entry) => ({
        key: 
          entry.user_id 
          ? `${entry.user_id}-${gameweek}` 
          : entry.club_id
          ? `${entry.club_id}-${gameweek}`
          : `${entry.name}-${gameweek}`,
        pos: entry.rank_position,
        name: entry.name,
        p10s: entry.perfect_10s,
        rCorrect: entry.correct_results,
        gdCorrect: entry.correct_goal_differences,
        hCorrect: entry.correct_home_goals,
        aCorrect: entry.correct_away_goals,
        gCorrect: entry.correct_total_goals,
        points: entry.total_points,
        id: entry.user_id ?? entry.club_id
      }));
    }

    setBoardData(newData);
  }, [gameweek, activeLens, weeklyLeaderboards, overallLeaderboard, loading]);

  if (loading) {
    return <p id="boardErr">Loading leaderboards...</p>;
  }

  return (
    <div id="boardData">
      {boardData.length === 0 ? (
        <p id="boardErr">Leaderboards are not currently available</p>
      ) : subjectType === "user" ? (
        boardData.map((subject) => <BoardRowNew key={subject.key} subject={subject} />)
      ) : (
        boardData.map((subject) => (
          <BoardRowNew
            key={subject.key}
            subject={subject}
            businessData={businessData}
            isTeam={true}
          />
        ))
      )}
    </div>
  );
}
