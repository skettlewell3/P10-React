import FixtureFieldset from "./FixtureFieldset";

export default function FixturesCard( {day, ko, fixtures, mode} ){

    return (
        <div className="fixturesCard">
            <div className="fixturesCardHeader">
                <div className="day">{day}</div>
                <div className="ko">{ko}</div>
            </div>
            {fixtures.map((fixture, idx) => (
               <FixtureFieldset 
                    key={idx}
                    fixture={fixture}
                    mode={mode}
                />
            ))}
        </div>
    )
}