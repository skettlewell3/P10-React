import { TEAMS } from "../../constants/teams";
import { classifyTeamName, formatDayMonth } from "../../utils/utils";

export default function FormBlock({ 
    side, 
    fixture, 
    teamName,
    scale
}) {

    if (!fixture) return null;



    const focusTeam = TEAMS.find(t => t.name === teamName)
    if (!focusTeam) return null;

    const isHome = fixture.home_team === focusTeam.name;
    const venue = isHome ? "H" : "A";

    const opponent = isHome ? fixture.away_short : fixture.home_short;
    const oppoClass = isHome ? fixture.away_team : fixture.home_team;
    
    const goalsFor = isHome ? fixture.home_goals : fixture.away_goals;
    const goalsAgainst = isHome ? fixture.away_goals : fixture.home_goals;

    let result = "";
    if (goalsFor != null && goalsAgainst != null) {
        if (goalsFor > goalsAgainst) result = "W";
        else if (goalsFor === goalsAgainst) result = "D";
        else result = "L";
    }

    const date = formatDayMonth(fixture.fixture_date);
    const ko = fixture.ko;


    return (
        <div 
            className={`formBlock ${side}`}          
        >            
            <div className="dateColFG">
                <div>{date}</div>
                <div>{ko}</div>
            </div>
            <div className="venueFG">
                {venue}
            </div>
            <div className={`oppoFG ${classifyTeamName(oppoClass)}`}>
                {opponent}
            </div>
             <div className="resultColFG" style={{ fontSize: `${scale}em` }}>
                <span>{goalsFor}</span>
                <span>-</span>
                <span>{goalsAgainst}</span>
            </div>
            <div className="resultColFG">
                <div className={`resultIconFG ${result}`} style={{ fontSize: `${scale}em` }}>{result}</div>
            </div>
        </div>
    )
}
