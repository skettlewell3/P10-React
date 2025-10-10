import GwNav from "../GwNav/GwNav"
import BoardContainer from "../LeaderBoards/BoardContainer"
import ViewTitleContainer from "../ViewTitleContainer"

export default function BoardsView( {
        activeWeek, 
        setActiveWeek, 
        activeLens, 
        setActiveLens, 
        subjectType,
        setSubjectType,
        activeView
    } ) {

    return (
        <>
            <ViewTitleContainer 
                title="Leaderboards :"
                subjectType={subjectType}
                setSubjectType={setSubjectType}
                activeLens={activeLens}
                setActiveLens={setActiveLens}
                activeView={activeView}
            />
            {activeLens === "season" ? "" :  
                <GwNav
                    activeWeek={activeWeek}
                    setActiveWeek={setActiveWeek}
                />
            }
            <BoardContainer 
                activeWeek={activeWeek}
                activeLens={activeLens}
                subjectType={subjectType}
            />        
        </>

    )
}