import PlayerCard from "./PlayerCard";
import AppDropdown from "./AppDropdown";

export default function HeaderProfile({overallRanking, userName, overallScore}) {
    return (
        <header id="headerProfile">
            <PlayerCard 
            userName={userName}
            overallRanking={overallRanking}
            overallScore={overallScore} />
            <AppDropdown />
        </header>
    );
}