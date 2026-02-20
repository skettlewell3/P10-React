export default function PlayerCardTitle ({ subject }) {
    
    const name = subject.name;
    const overallScore = 0;
    const overallRanking = 0;

    return (
        <div id="playerCardTitleModal">
            <div id="playerCardScore">⭐:{overallScore}</div>
            <div id="playerCardName">{name}</div>
            <div id="playerCardRanking">#{overallRanking}</div>
        </div>
    )
}