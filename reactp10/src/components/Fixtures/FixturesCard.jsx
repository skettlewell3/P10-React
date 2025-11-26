import FixtureFieldsetDB from "./FixtureFieldsetDB";

export default function FixturesCard( { day, ko, fixtures, mode } ){

    return (
        <div className="fixturesCard">
            <div className="fixturesCardHeader">
                <div className="day">{day}</div>
                <div className="ko">{ko}</div>
            </div>
            {fixtures.map((fixture) => (
               <FixtureFieldsetDB 
                    key={fixture.fixture_id}
                    fixture={fixture}
                    mode={mode}
                />
            ))}
        </div>
    )
}