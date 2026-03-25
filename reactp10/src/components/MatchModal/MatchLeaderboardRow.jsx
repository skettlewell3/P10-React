export default function MatchLeaderboardRow ({ 
    rank,
    name,
    home,
    away,
    points,
    points_result,
    points_gd,
    points_home,
    points_away,
    points_tg
 }) {
    return (
        <div className={`matchBoardRow matchBoardAlign ${
            points === 10 ? "perfect10" : ""
        } ${
            rank === 1 ? "firstMatch" : 
            rank === 2 ? "secondMatch" : 
            rank === 3 ? "thirdMatch" : "" 
        }`}        
        >
            <div className="pos">{rank}</div>
            <div className="matchSubjectTag row">
                <div className="matchNameTag row">
                    {name}
                </div>
                <div className="matchPredTag row">
                    <span>{home}</span>
                    <span>v</span>
                    <span>{away}</span>
                </div>
            </div>
            <div className="rCorrect">{points_result}</div>
            <div className="rCorrect">{points_gd}</div>
            <div className="rCorrect">{points_home}</div>
            <div className="rCorrect">{points_away}</div>
            <div className="rCorrect">{points_tg}</div>
            <div className="rCorrect">{points}</div>
        </div>
    )
}