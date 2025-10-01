export default function PlayerCard({ overallRanking, userName, overallScore }) {
    return (
        <div id="playerCard">
            <img src="https://placehold.co/48" alt="player pic" id="playerImg" />
            <div id="playerCardText">
                <div id="playerCardRanking">#{overallRanking}</div>
                <div id="playerCardName">{userName}</div>
                <div id="playerCardScore">⭐:{overallScore}</div>
            </div>
        </div>
    );
}