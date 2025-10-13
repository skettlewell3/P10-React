export default function PlayerCard({ overallRanking, user, overallScore }) {
    return (
        <div id="playerCard">
            <img src="https://placehold.co/48" alt="player pic" id="playerImg" />
            <div id="playerCardText">
                <div id="playerCardScore">⭐:{overallScore}</div>
                <div id="playerCardName">{user?.name}</div>
                <div id="playerCardRanking">#{overallRanking}</div>
            </div>
        </div>
    );
}