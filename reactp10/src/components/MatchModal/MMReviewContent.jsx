import { useEffect } from "react";
import { useUserFixtureLeaderboard } from "../../hooks/useUserFixtureLeaderboard";
import { useClubFixtureLeaderboard } from "../../hooks/useClubFixtureLeaderboard";
import MatchLeaderboardHeader from "./MatchLeaderboardHeader";
import MatchLeaderboardRow from "./MatchLeaderboardRow";

export default function MMReviewContent({ fixture, subjectType }) {

    const {
      leaderboardsByFixture: userLeaderboards,
      loadingByFixture: userLoading,
      fetchLeaderboard: fetchUserLeaderboard
    } = useUserFixtureLeaderboard();

    const {
      leaderboardsByFixture: clubLeaderboards,
      loadingByFixture: clubLoading,
      fetchLeaderboard: fetchClubLeaderboard
    } = useClubFixtureLeaderboard();

    useEffect(() => {
      if (fixture?.fixture_id) {
        fetchUserLeaderboard(fixture.fixture_id);
        fetchClubLeaderboard(fixture.fixture_id);
      }
    }, [fixture?.fixture_id, fetchUserLeaderboard, fetchClubLeaderboard]);

    const userFixtureLeaderboard = userLeaderboards[fixture.fixture_id]?.data;
    const clubFixtureLeaderboard = clubLeaderboards[fixture.fixture_id]?.data;

    const loading =
    subjectType === "user"
      ? userLoading[fixture.fixture_id]
      : clubLoading[fixture.fixture_id]
    ;

    const renderData =
      subjectType === "user"
        ? userFixtureLeaderboard
        : clubFixtureLeaderboard
    ;

    if (loading) return <p>Loading leaderboard...</p>;
    if (!renderData) return null;

  return (
    <div className="boardContainer">
        <MatchLeaderboardHeader 
            subjectType={subjectType}
        />

        <div className="boardData">
            {renderData.map((row) => (
                <MatchLeaderboardRow 
                    key={subjectType === "user" ? row.user_id : row.club_id}
                    rank={row.rank_position}
                    name={row.name}
                    home={
                        subjectType === "user"
                            ? row.pred_home_goals
                            : row.club_home_goals
                    }
                    away={
                        subjectType === "user"
                            ? row.pred_away_goals
                            : row.club_away_goals
                    }
                    points={row.total_points}
                    points_result={row.points_result}
                    points_gd={row.points_gd}
                    points_home={row.points_home}
                    points_away={row.points_away}
                    points_tg={row.points_total_goals}
                />
            ))}
      </div>

      

    </div>
  );
}