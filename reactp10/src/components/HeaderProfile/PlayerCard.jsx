export default function PlayerCard({ overallRanking, user, overallScore, onLogout }) {
    const handleLogoutClick = () => {
        const confirmLogout = window.confirm(`Logout ${user?.name}`);
        if (confirmLogout) {
            onLogout(user);
        }
    };

    return (
        <div id="playerCard">
            <img 
                src="https://placehold.co/48" 
                alt="player pic" 
                id="playerImg" 
                onClick={handleLogoutClick}
            />
            <div id="playerCardText">
                <div id="playerCardScore">⭐:{overallScore}</div>
                <div id="playerCardName">{user?.name}</div>
                <div id="playerCardRanking">#{overallRanking}</div>
            </div>
        </div>
    );
}