import ViewTitleContainer from "../ViewTitleContainer"
import GwNav from "../GwNav/GwNav"
import FixtureListDB from "../Fixtures/FixtureListDB"

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
        <FixtureListDB 
            gameweek={activeWeek}
            mode="review"     
        />  
        </>
    )
}