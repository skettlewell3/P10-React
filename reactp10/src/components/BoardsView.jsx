import GwNav from "./GwNav/GwNav"
import BoardContainer from "./LeaderBoards/BoardContainer"
import ViewTitleContainer from "./ViewTitleContainer"

export default function BoardsView( {
        activeWeek, 
        setActiveWeek, 
        activeLens, 
        setActiveLens, 
        subjectType,
        setSubjectType
    } ) {

    return (
        <>
            <ViewTitleContainer 
                title="Leaderboards"
                subjectType={subjectType}
                setSubjectType={setSubjectType}
            /> 
            <GwNav 
                activeWeek={activeWeek}
                setActiveWeek={setActiveWeek}
            />
            <BoardContainer 
                activeWeek={activeWeek}
                activeLens={activeLens}
                subjectType={subjectType}
            />        
        </>

    )
}