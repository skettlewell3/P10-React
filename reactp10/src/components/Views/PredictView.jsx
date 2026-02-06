import PredictList from "../Fixtures/PredictList";
import ViewTitleContainer from "../ViewTitleContainer";
import { useGameweek } from '../../hooks/useGameweeks';
import BoardSnapshot from "../LeaderBoards/BoardSnapshot";

export default function PredictView({ 
    activeView, 
    subjectType, 
    setSubjectType, 
    currentGwStatus, 
    highlightedClub, 
    setHighlightedClub, 
    clubs, 
    refreshAll
}) {
    const { currentWeek } = useGameweek();

    return (
        <>
            <ViewTitleContainer
                title={`Gameweek: ${currentWeek}`}
                variant="clubs"
                subjectType={subjectType}
                setSubjectType={setSubjectType}
                activeView={activeView}
                highlightedClub={highlightedClub}
                setHighlightedClub={setHighlightedClub}
                clubs={clubs}
            />  
            {currentGwStatus === "live" && (
              <BoardSnapshot
                gameweek={currentWeek}
                subjectType={subjectType}
                highlightedClub={highlightedClub}
              />
            )}
            <PredictList 
                gameweek={currentWeek} 
                subjectType={subjectType}
                currentGwStatus={currentGwStatus}
                highlightedClub={highlightedClub}
                refreshAll={refreshAll}
            />   
        </>
    )
}