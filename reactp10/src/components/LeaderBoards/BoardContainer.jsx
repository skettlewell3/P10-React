import BoardBody from "./BoardBody";
import BoardHeader from "./BoardHeader";

export default function BoardContainer ( {
    activeWeek, 
    subjectType,  
    activeLens, 
    businessData
} ) {

    return (
        <div id="boardContainer">
            <BoardHeader 
                activeLens={activeLens}
                subjectType={subjectType}
            />
            <BoardBody 
                gameweek={activeWeek}
                subjectType={subjectType}
                activeLens={activeLens}
                businessData={businessData}
            />
        </div>
    )
}