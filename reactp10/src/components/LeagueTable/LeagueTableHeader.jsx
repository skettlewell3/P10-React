export default function LeagueTableHeader() {
    return (
        <div className="leagueTableHeader">
            <div className="col pos">#</div>
            <div className="col team">Team</div>
            <div className="col played">P</div>
            <div className="col wins">W</div>
            <div className="col draws">D</div>
            <div className="col losses">L</div>
            <div className="col gf">GF</div>
            <div className="col ga">GA</div>
            <div className="col gd">GD</div>
            <div className="col pts">PTS</div>
        </div>
    )
}