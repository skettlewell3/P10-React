import { useEffect } from 'react';
import { useGameweek } from '../../hooks/useGameweeks';
import ViewTitleContainer from "../ViewTitleContainer";
import GwNav from "../GwNav/GwNav";
import ReviewList from "../Fixtures/ReviewList";
import BoardSnapshot from "../LeaderBoards/BoardSnapshot";

export default function ReviewView({ activeWeek, setActiveWeek, subjectType, setSubjectType, highlightedClub, clubs, setHighlightedClub }) {

    const { currentWeek, currentGwStatus } = useGameweek();

    useEffect(() => {
        if (
            currentGwStatus !== "finished" && 
            activeWeek === currentWeek
        ) {
            setActiveWeek(currentWeek - 1);
        }
    }, [activeWeek, currentWeek, currentGwStatus, setActiveWeek])

    return (
        <>
        <ViewTitleContainer 
            title="Review" 
            subjectType={subjectType}
            setSubjectType={setSubjectType}
            clubs={clubs}
            highlightedClub={highlightedClub}
            setHighlightedClub={setHighlightedClub}
        />
        <GwNav
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
            allowCurrentWeek={false}
        />
        <BoardSnapshot
            gameweek={activeWeek}
            subjectType={subjectType}
            highlightedClub={highlightedClub}
        />
        <ReviewList 
            gameweek={activeWeek}
            subjectType={subjectType}
            mode="review"     
            highlightedClub={highlightedClub}
        />  
        </>
    )
}