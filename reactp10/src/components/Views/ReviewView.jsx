import { useGameweek } from '../../hooks/useGameweeks';
import ViewTitleContainer from "../ViewTitleContainer";
import GwNav from "../GwNav/GwNav";
import ReviewList from "../Fixtures/ReviewList";
import BoardSnapshot from "../LeaderBoards/BoardSnapshot";

export default function ReviewView({ activeWeek, setActiveWeek, subjectType, setSubjectType, highlightedClub, clubs, setHighlightedClub }) {

    const { currentWeek, currentGwStatus } = useGameweek();

    const renderWeek = (currentGwStatus !== "finished" && activeWeek === currentWeek)
        ? currentWeek - 1
        : activeWeek
    ;

    return (
        <>
        <ViewTitleContainer 
            title="Review" 
            subjectType={subjectType}
            setSubjectType={setSubjectType}
            clubs={clubs}
            highlightedClub={highlightedClub}
            setHighlightedClub={setHighlightedClub}
        />
        <GwNav
            activeWeek={renderWeek}
            setActiveWeek={setActiveWeek}
            allowCurrentWeek={false}
        />
        <BoardSnapshot
            gameweek={renderWeek}
            subjectType={subjectType}
            highlightedClub={highlightedClub}
        />
        <ReviewList 
            gameweek={renderWeek}
            subjectType={subjectType}
            mode="review"     
            highlightedClub={highlightedClub}
        />  
        </>
    )
}