export default function BoardHeader( {subjectType} ) {
    return (
        <div className="boardHead boardAlign ">
            <div >#</div>
            <div id="nameTag">
                {subjectType === "team" ? "Team" : "Player"}
            </div>
            <div >10s</div>
            <div >R</div>
            <div >GD</div>
            <div >H</div>
            <div >A</div>
            <div >G</div>
            <div >Pts</div>
        </div>
    )
}