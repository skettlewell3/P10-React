import FixtureList from "../Fixtures/FixtureList"
import ViewTitleContainer from "../ViewTitleContainer"
import GwNav from "../GwNav/GwNav"

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
        <FixtureList 
            gameweek={activeWeek}
            mode="review"     
        />  
        </>
    )
}