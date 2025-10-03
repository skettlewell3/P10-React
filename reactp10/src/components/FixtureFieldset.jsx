import { classifyTeamName } from "../utils/utils";

export default function FixtureFieldset( {fixture, mode} ) {
    const { day, ko, home, away, hgoal, agoal } = fixture;

    return (
        <fieldset className="match">
            <div className="day">{day}</div>
            <div className="ko">{ko}</div>
            <div className={`team home ${classifyTeamName(home)}`}>{home}</div>
            {mode === "form" ? (
                <div className="homePred">
                    <input type="number" 
                        className="pred" 
                        name={home} 
                        min="0" max="10" required>
                    </input>
                </div>
            ) : (
                <div className="homeScore">{hgoal}</div>
            )}
            <div className="v">v</div>
            {mode === "form" ? (
                <div className="awayPred">
                    <input type="number" 
                        className="pred" 
                        name={away} 
                        min="0" max="10" required>
                    </input>
                </div>
            ) : (
                <div className="awayScore">{agoal}</div>
            )}
            <div className={`team away ${classifyTeamName(away)}`}>{away}</div>
        </fieldset>
    )
}