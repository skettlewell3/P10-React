import FixtureFieldsetDB from "./FixtureFieldsetDB";
import PredictPreviews from "./PredictPreviews";
import ScoringBreakdownContainer from "./ScoringBreakdownContainer";

export default function FixturesCard( { day, ko, fixtures, mode, subjectType } ){

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
                    toggledContent={
                        mode === "form" 
                        ? <PredictPreviews />
                        : <ScoringBreakdownContainer 
                            subjectType={subjectType}
                        />
                    }
                />
            ))}
        </div>
    )
}