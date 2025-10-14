import PlayerCard from "./PlayerCard";
import AppDropdown from "./AppDropdown";

export default function HeaderProfile({overallRanking, user, overallScore, onLogout}) {
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