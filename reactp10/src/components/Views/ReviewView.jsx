import ViewTitleContainer from "../ViewTitleContainer"
import GwNav from "../GwNav/GwNav"
import ReviewList from "../Fixtures/ReviewList"

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
        <ReviewList 
            gameweek={activeWeek}
            mode="review"     
        />  
        </>
    )
}