import GwNav from "./GwNav/GwNav"
import BoardContainer from "./LeaderBoards/BoardContainer"
import ViewTitle from "./ViewTitle"

export default function NewsView( {activeWeek, setActiveWeek} ) {
    return (
        <>
        <ViewTitle title="Leaderboards" /> 
        <GwNav 
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
        />
        <BoardContainer />        
        </>

    )
}