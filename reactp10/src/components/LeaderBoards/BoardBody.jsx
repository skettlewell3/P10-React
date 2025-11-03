import { useEffect, useState } from "react";
import { useLeaderboards } from "../../hooks/useLeaderboards"
import BoardRow from "./BoardRow";

export default function BoardBody({ gameweek, activeLens, subjectType, businessData }) {
  const { weeklyLeaderboards, overallLeaderboard, loading } = useLeaderboards();
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    if (loading) return;

    let newData = [];

    if (activeLens === "season") {
      // overall leaderboard
      newData = overallLeaderboard.map((entry) => ({
        key: entry.user_id ?? entry.name, // stable key fallback
        pos: entry.rank_position,
        name: entry.name,
        p10s: entry.perfect_10s,
        rCorrect: entry.correct_results,
        gdCorrect: entry.correct_goal_differences,
        hCorrect: entry.correct_home_goals,
        aCorrect: entry.correct_away_goals,
        gCorrect: entry.correct_total_goals,
        points: entry.total_points,
      }));
    } else {
      // weekly data (expect weeklyLeaderboards to be an object: { 1: [...], 2: [...] })
      const weekData = weeklyLeaderboards?.[gameweek] || [];
      newData = weekData.map((entry) => ({
        key: entry.user_id ? `${entry.user_id}-${gameweek}` : `${entry.name}-${gameweek}`,
        pos: entry.rank_position,
        name: entry.name,
        p10s: entry.perfect_10s,
        rCorrect: entry.correct_results,
        gdCorrect: entry.correct_goal_differences,
        hCorrect: entry.correct_home_goals,
        aCorrect: entry.correct_away_goals,
        gCorrect: entry.correct_total_goals,
        points: entry.total_points,
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
        boardData.map((subject) => <BoardRow key={subject.key} subject={subject} />)
      ) : (
        boardData.map((subject) => (
          <BoardRow
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
