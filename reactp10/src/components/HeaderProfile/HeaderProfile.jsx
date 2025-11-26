import PlayerCard from "./PlayerCard";
import AppDropdown from "./AppDropdown";
import { useLeaderboardsUser } from "../../hooks/useLeaderboardsUser";

export default function HeaderProfile({ user, onLogout }) {
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
            <AppDropdown />
        </header>
    );
}