import ProfileDropdown from "./ProfileDropdown";

export default function PlayerCard({ overallRanking, user, overallScore, onLogout }) {
   

    return (
        <div id="playerCard">
            <ProfileDropdown user={user} onLogout={onLogout} />
            
            <div id="playerCardText">
                <div id="playerCardScore">⭐:{overallScore}</div>
                <div id="playerCardName">{user?.name}</div>
                <div id="playerCardRanking">#{overallRanking}</div>
            </div>
        </div>
    );
}