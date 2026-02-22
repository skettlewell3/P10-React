import { useEffect, useState } from 'react'
import GwNav from "../GwNav/GwNav"
import BoardContainer from "../LeaderBoards/BoardContainer"
import BoardHeader from "../LeaderBoards/BoardHeader"
import BoardBody from "../LeaderBoards/BoardBody"
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
        const [businessData, setBusinessData] = useState(null);
        const [businessError, setBusinessError] = useState(null);

        useEffect(() => {
            const fetchBusinessData = async () => {
                try {
                    const res = await fetch("/data/businessData.json");
                    if (!res.ok) throw new Error ("Failed to load business data");
                    const data = await res.json();
                    setBusinessData(data);
                } catch (err) {
                    console.error(err);
                    setBusinessError("Error loading business data")
                }
            };

            fetchBusinessData();
        }, []);

    return (
        <>
            <ViewTitleContainer 
                title="Leaderboards :"
                variant="boards"
                subjectType={subjectType}
                setSubjectType={setSubjectType}
                activeLens={activeLens}
                setActiveLens={setActiveLens}
                activeView={activeView}
            />
            {activeLens === "season" ? null :  
                <GwNav
                    activeWeek={activeWeek}
                    setActiveWeek={setActiveWeek}
                    allowCurrentWeek={true}
                />
            }
            <BoardContainer >
                <BoardHeader 
                    // activeWeek={activeWeek}
                    // activeLens={activeLens}
                    subjectType={subjectType}
                />
                <BoardBody 
                    gameweek={activeWeek}
                    activeLens={activeLens}
                    subjectType={subjectType}
                    businessData={businessData}
                    businessError={businessError}
                />
            </BoardContainer>        
        </>
    )
}