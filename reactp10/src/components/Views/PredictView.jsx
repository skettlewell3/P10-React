import {CURRENT_WEEK} from '../../config';
import PredictList from "../Fixtures/PredictList";
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
            <PredictList gameweek={CURRENT_WEEK} mode="form" />   
        </>
    )
}