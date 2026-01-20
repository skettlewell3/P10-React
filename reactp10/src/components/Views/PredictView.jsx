import PredictList from "../Fixtures/PredictList";
import ViewTitleContainer from "../ViewTitleContainer";
import { useGameweek } from '../../hooks/useGameweeks';
import BoardSnapshot from "../LeaderBoards/BoardSnapshot";

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
            {currentGwStatus === "live" && (
              <BoardSnapshot
                gameweek={currentWeek}
                subjectType={subjectType}
              />
            )}
            <PredictList 
                gameweek={currentWeek} 
                subjectType={subjectType}
                currentGwStatus={currentGwStatus}
            />   
        </>
    )
}