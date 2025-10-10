import FixtureList from "../Fixtures/FixtureList"
import ViewTitle from "../ViewTitle"
import GwNav from "../GwNav/GwNav"

export default function ReviewView( {activeWeek, setActiveWeek} ) {
    return (
        <>
        <ViewTitle title="Review" />
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