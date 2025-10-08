import BoardBody from "./BoardBody";
import BoardHeader from "./BoardHeader";

export default function BoardContainer ({activeWeek, activeLens}) {
    return (
        <div id="boardContainer">
            <BoardHeader 
                activeLens={activeLens}
            />
            <BoardBody 
                activeWeek={activeWeek}
            />
        </div>
    )
}