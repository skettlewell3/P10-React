export default function LeagueTableRow({ data }) {
    const {
        pos,
        team_name,
        played,
        wins,
        draws,
        losses,
        goals_for,
        goals_against,
        goal_difference,
        points
    } = data;

    return (
        <div className="leagueTableRow">
            <div className="col pos">{pos}</div>
            <div className="col team">{team_name}</div>
            <div className="col played">{played}</div>
            <div className="col wins">{wins}</div>
            <div className="col draws">{draws}</div>
            <div className="col losses">{losses}</div>
            <div className="col gf">{goals_for}</div>
            <div className="col ga">{goals_against}</div>
            <div className="col gd">{goal_difference}</div>
            <div className="col pts">{points}</div>
        </div>
    );
}
