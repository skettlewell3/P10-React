import {CURRENT_WEEK} from '../../config';
import FixtureList from "../Fixtures/FixtureList";
import ViewTitleContainer from "../ViewTitleContainer";

export default function PredictView( {activeView, subjectType, setSubjectType} ) {
    return (
        <>
            <ViewTitleContainer
                title={`Gameweek: ${CURRENT_WEEK}`}
                subjectType={subjectType}
                setSubjectType={setSubjectType}
                activeView={activeView}
            />  
            <FixtureList gameweek={CURRENT_WEEK} mode="form" />   
        </>
    )
}