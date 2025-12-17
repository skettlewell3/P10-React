import PredictList from "../Fixtures/PredictList";
import ViewTitleContainer from "../ViewTitleContainer";
import { useGameweek } from '../../hooks/useGameweeks';

export default function PredictView( {activeView, subjectType, setSubjectType, currentGwStatus} ) {
    const { currentWeek } = useGameweek();

    return (
        <>
            <ViewTitleContainer
                title={`Gameweek: ${currentWeek}`}
                subjectType={subjectType}
                setSubjectType={setSubjectType}
                activeView={activeView}
            />  
            <PredictList 
                gameweek={currentWeek} 
                subjectType={subjectType}
                currentGwStatus={currentGwStatus}
            />   
        </>
    )
}