export default function MatchLeaderboardHeader ( {subjectType} ) {

    return (
        <div className="matchBoardHeader matchBoardAlign ">
            <div >#</div>
            <div className="matchSubjectTag header">
                <span className="matchNameTag header">
                    {subjectType === "club" ? "Club" : "User"}
                </span>
                <span className="matchPredTag header">
                    Prediction                  
                </span>
            </div>
            <div >R</div>
            <div >GD</div>
            <div >H</div>
            <div >A</div>
            <div >G</div>
            <div >Pts</div>
        </div>
    )
}