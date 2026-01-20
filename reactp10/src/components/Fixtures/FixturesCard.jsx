import FixtureFieldsetDB from "./FixtureFieldsetDB";
import PredictPreviews from "./PredictPreviews";
import ScoringBreakdownContainer from "./ScoringBreakdownContainer";

export default function FixturesCard( { day, ko, fixtures, mode, subjectType, canToggle } ){

    const cardStatus = fixtures[0]?.fixture_status;

    const statusMap = {
        upcoming: {label: 'Upcoming', color: 'amber'},
        live: {label: 'Live', color: 'green'},
        finished: {label: 'Finished', color: 'red'}
    };

    const statusMeta = statusMap[cardStatus]

    return (
        <div className="fixturesCard">
            <div className="fixturesCardHeader">
                <div className="fcHeaderCenter">
                    <div className="day">{day}</div>
                    <div className="ko">{ko}</div>
                </div>

                {statusMeta && (
                    <div className={`fixtureStatus ${statusMeta.color}`}>
                        <span className="dot" />
                        {statusMeta.label}
                    </div>
                )}
            </div>

            {fixtures.map((fixture) => {
                const isUpcoming = fixture.fixture_status === 'upcoming';

                const toggledContent = 
                    mode === 'form'
                        ? <PredictPreviews mode={mode} /> 
                        : isUpcoming 
                            ? <PredictPreviews mode={mode} />
                            : <ScoringBreakdownContainer subjectType={subjectType} />;

                return (
                    <FixtureFieldsetDB 
                        key={fixture.fixture_id}
                        fixture={fixture}
                        mode={mode}
                        toggledContent={toggledContent}
                        canToggle={canToggle}
                    />
                )                
            })}
        </div>
    )
}