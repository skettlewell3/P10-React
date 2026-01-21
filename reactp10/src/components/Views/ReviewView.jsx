import ViewTitleContainer from "../ViewTitleContainer"
import GwNav from "../GwNav/GwNav"
import ReviewList from "../Fixtures/ReviewList"
import BoardSnapshot from "../LeaderBoards/BoardSnapshot"

export default function ReviewView({ activeWeek, setActiveWeek, subjectType, setSubjectType, highlightedClub, clubs, setHighlightedClub }) {
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
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
        />
        <BoardSnapshot
            gameweek={activeWeek}
            subjectType={subjectType}
            allowCurrentWeek={false}
            highlightedClub={highlightedClub}
        />
        <ReviewList 
            gameweek={activeWeek}
            subjectType={subjectType}
            mode="review"     
        />  
        </>
    )
}