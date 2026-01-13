import ViewTitleContainer from "../ViewTitleContainer"
import GwNav from "../GwNav/GwNav"
import ReviewList from "../Fixtures/ReviewList"
import BoardSnapshot from "../LeaderBoards/BoardSnapshot"

export default function ReviewView( {activeWeek, setActiveWeek, subjectType, setSubjectType} ) {
    return (
        <>
        <ViewTitleContainer 
            title="Review" 
            subjectType={subjectType}
            setSubjectType={setSubjectType}
        />
        <GwNav
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
        />
        <BoardSnapshot
            gameweek={activeWeek}
            subjectType={subjectType}
        />
        <ReviewList 
            gameweek={activeWeek}
            subjectType={subjectType}
            mode="review"     
        />  
        </>
    )
}