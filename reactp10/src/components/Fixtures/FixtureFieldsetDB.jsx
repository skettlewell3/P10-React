import { classifyTeamName } from "../../utils/utils";

export default function FixtureFieldsetDB( { fixture, mode} ) {
    const { home_team, home_short, away_short, away_team, home_goals, away_goals } = fixture;

    return (
        <fieldset className="match">            
            <div className={`team home ${classifyTeamName(home_team)}`} title={home_team}>{home_short}</div>
            {mode === "form" ? (
                <div className="homePred">
                    <input type="number" 
                        className="pred" 
                        name={home_team} 
                        min="0" max="10" required>
                    </input>
                </div>
            ) : (
                <div className="homeScore">{home_goals}</div>
            )}
            <div className="v">v</div>
            {mode === "form" ? (
                <div className="awayPred">
                    <input type="number" 
                        className="pred" 
                        name={away_team} 
                        min="0" max="10" required>
                    </input>
                </div>
            ) : (
                <div className="awayScore">{away_goals}</div>
            )}
            <div className={`team away ${classifyTeamName(away_team)}`} title={away_team}>{away_short}</div>
        </fieldset>
    )
}