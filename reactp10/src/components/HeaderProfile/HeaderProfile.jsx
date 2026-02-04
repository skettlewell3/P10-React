import PlayerCard from "./PlayerCard";
import { useLeaderboardsUser } from "../../hooks/useLeaderboardsUser";
import RefreshControl from "./RefreshControl";

export default function HeaderProfile({ user, onLogout, refreshAll }) {
    const { overallUserLeaderboard, loading } = useLeaderboardsUser();

    const userStats = overallUserLeaderboard.find((row) => row.user_id === user?.user_id);

    const overallRanking = loading ? "-" : userStats?.rank_position ?? "-";
    
    const overallScore = loading ? "-" : userStats?.total_points ?? "-";

    return (
        <header id="headerProfile">
            <PlayerCard 
                user={user}
                overallRanking={overallRanking}
                overallScore={overallScore} 
                onLogout={onLogout}
            />
            <RefreshControl refreshAll={refreshAll} />
        </header>
    );
}